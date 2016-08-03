!function(){
	var Donut3D={};
	 var legendRectSize = 18;
	 var legendSpacing = 4;


	
	function pieTop(d, rx, ry, ir ){
		if(d.endAngle - d.startAngle == 0 ) return "M 0 0";
		var sx = rx*Math.cos(d.startAngle),
			sy = ry*Math.sin(d.startAngle),
			ex = rx*Math.cos(d.endAngle),
			ey = ry*Math.sin(d.endAngle);
			
		var ret =[];
		ret.push("M",sx,sy,"A",rx,ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0),"1",ex,ey,"L",ir*ex,ir*ey);
		ret.push("A",ir*rx,ir*ry,"0",(d.endAngle-d.startAngle > Math.PI? 1: 0), "0",ir*sx,ir*sy,"z");
		return ret.join(" ");
	}

	function pieOuter(d, rx, ry, h ){
		var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
		var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);
		
		var sx = rx*Math.cos(startAngle),
			sy = ry*Math.sin(startAngle),
			ex = rx*Math.cos(endAngle),
			ey = ry*Math.sin(endAngle);
			
			var ret =[];
			ret.push("M",sx,h+sy,"A",rx,ry,"0 0 1",ex,h+ey,"L",ex,ey,"A",rx,ry,"0 0 0",sx,sy,"z");
			return ret.join(" ");
	}

	function pieInner(d, rx, ry, h, ir ){
		var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
		var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);
		
		var sx = ir*rx*Math.cos(startAngle),
			sy = ir*ry*Math.sin(startAngle),
			ex = ir*rx*Math.cos(endAngle),
			ey = ir*ry*Math.sin(endAngle);

			var ret =[];
			ret.push("M",sx, sy,"A",ir*rx,ir*ry,"0 0 1",ex,ey, "L",ex,h+ey,"A",ir*rx, ir*ry,"0 0 0",sx,h+sy,"z");
			return ret.join(" ");
	}

	function getPercent(d){
		return d.value+" "+(d.endAngle-d.startAngle > 0.2 ? 
				Math.round(1000*(d.endAngle-d.startAngle)/(Math.PI*2))/10+'%' : '');
	}	
	
	Donut3D.transition = function(id,data, rx, ry, h, ir){
		function arcTweenInner(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return pieInner(i(t), rx+0.5, ry+0.5, h, ir);  };
		}
		function arcTweenTop(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return pieTop(i(t), rx, ry, ir);  };
		}
		function arcTweenOuter(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return pieOuter(i(t), rx-.5, ry-.5, h);  };
		}
		function textTweenX(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return 0.6*rx*Math.cos(0.5*(i(t).startAngle+i(t).endAngle));  };
		}
		function textTweenY(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) { return 0.6*rx*Math.sin(0.5*(i(t).startAngle+i(t).endAngle));  };
		}
		
		var _data = d3.layout.pie().sort(null).value(function(d) {return d.value;})(data);
		
		d3.select("#"+id).selectAll(".innerSlice").data(_data)
			.transition().duration(750).attrTween("d", arcTweenInner); 
			
		d3.select("#"+id).selectAll(".topSlice").data(_data)
			.transition().duration(750).attrTween("d", arcTweenTop); 
			
		d3.select("#"+id).selectAll(".outerSlice").data(_data)
			.transition().duration(750).attrTween("d", arcTweenOuter); 	
			
		d3.select("#"+id).selectAll(".percent").data(_data).transition().duration(750)
			.attrTween("x",textTweenX).attrTween("y",textTweenY).text(getPercent); 

			
	}
	
	Donut3D.draw=function(id, excelObject,SENConnectivityKeys,geoLocation,data, x /*center x*/, y/*center y*/, 
			rx/*radius x*/, ry/*radius y*/, h/*height*/, ir/*inner radius*/){
	
			  
		var _data = d3.layout.pie().sort(null).value(function(d) {return d.value;})(data);
		
		var slices = d3.select("#"+id).append("g").attr("transform", "translate(" + x + "," + y + ")")
			.attr("class", "slices");
			
		slices.selectAll(".innerSlice").data(_data).enter().append("path").attr("class", "innerSlice")
			.style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
			.attr("d",function(d){ return pieInner(d, rx+0.5,ry+0.5, h, ir);})
			.each(function(d){this._current=d;})
				.on('click',function(d,index){
						    var temp = [];
					        for(var i=0,item=excelObject["Dashboard_Dump"];i<item.length;i++){
					        	if(item[i]["CONNECTIVITY"]==SENConnectivityKeys[index]){
					        		temp.push(item[i]);
					        	}
					        }
					        geoLocation(temp);
			});;
		
		slices.selectAll(".topSlice").data(_data).enter().append("path").attr("class", "topSlice")
			.style("fill", function(d) { return d.data.color; })
			.style("stroke", function(d) { return d.data.color; })
			.attr("d",function(d){ return pieTop(d, rx, ry, ir);})
			.each(function(d){this._current=d;})
				.on('click',function(d,index){
						    var temp = [];
					        for(var i=0,item=excelObject["Dashboard_Dump"];i<item.length;i++){
					        	if(item[i]["CONNECTIVITY"]==SENConnectivityKeys[index]){
					        		temp.push(item[i]);
					        	}
					        }
					        geoLocation(temp);
			});;
		
		slices.selectAll(".outerSlice").data(_data).enter().append("path").attr("class", "outerSlice")
			.style("fill", function(d) { return d3.hsl(d.data.color).darker(0.7); })
			.attr("d",function(d){ return pieOuter(d, rx-.5,ry-.5, h);})
				.on('click',function(d,index){
						    var temp = [];
					        for(var i=0,item=excelObject["Dashboard_Dump"];i<item.length;i++){
					        	if(item[i]["CONNECTIVITY"]==SENConnectivityKeys[index]){
					        		temp.push(item[i]);
					        	}
					        }
					        geoLocation(temp);
			});;



      		       function wrap(text, width) {
							  text.each(function() {
							    var text = d3.select(this),
							        words = text.text().split(/\s+/).reverse(),
							        word,
							        line = [],
							        lineNumber = 0,
							        lineHeight = 1.3, // ems
							        y = text.attr("y"),
							        dy = 1,
							        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
							    while ((word = words.pop()) && (lineNumber < 4)  ) 
							    {
							    	 line.push(word);
							      tspan.text(line.join(" "));
							      if (tspan.node().getComputedTextLength() > width) {
							        line.pop();
							        tspan.text(line.join(" "));
							        line = [word];
							        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
							      }
							    }
							  });
							}		
	
		slices.selectAll(".percent").data(_data).enter().append("text").attr("class", "percent")
			.attr("x",function(d){ return (0.6*rx*Math.cos(0.5*(d.startAngle+d.endAngle)));})
			.attr("y",function(d){ return (-25+0.6*ry*Math.sin(0.5*(d.startAngle+d.endAngle)));})
			.text(getPercent).each(function(d){this._current=d;})
			.style("fill","black")
			.call(wrap, 5);	


	}
	
	this.Donut3D = Donut3D;
}();