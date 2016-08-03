app.controller('equipmentDetailsController',['$scope','dataLoad','equipmentDtlsService',function($scope,dataLoad,equipmentDtlsService){
		$scope.equipmentData=equipmentDtlsService.getSelectedEquipment();
		
$scope.healthNames = {"SYSTEM_POWERONHOURS" : "System Power on Hours","SYSTEM_UPTIME" : "System Uptime","SYSTEM_FANSPEED":"System FanSpeed","SYSTEM_CPUTEMPERATURE":"System CPU Temperature","SYSTEM_CPUSERIALNUMBER":"System CPU Serial Number","SSD_FREESPACE":"SSD Disk Free Space","ROW_LAST_UPDT_DTM":"Last DTM Event Processd"};
	$scope.healthNames2 = {"SSD_TEMP":"SSD Temparature","SSD_SERIALNUMBER":"SSD Serial Number","RAM_TOTAL":"Total Ram","RAM_USAGE":"Ram Usage","SYSTEM_TEMP":"System Temparature","SYSTEM_UNSAFESHUTDOWNCOUNT":"System Unsafe Shutdown Count","CONNECTIVITY":"Connectivity"};
	$scope.overviewNames = {'EQPMT_ID':"Equipment id","LAST_BEAT":"Last Heartbeat Timestamp","EQPMT_SRL_NUM_VAL":"NUC Serial Number","NUC_PART_NUMBER":"NUC Part Number","SSD_FREESPACE":"Available DIsk Space in SSD","SOFTWARE_PLUGINS":"Manf-image-Version","SYSTEM_UPTIME":"System Uptime","SIGNAL_STRENGTH":"Signal Strength"};
	$scope.overviewNames2 = {"ROW_LAST_UPDT_DTM":"Last Pour Timestamp","SPIRE_VERSION":"Spire version","INSTALLATION_DATE":"Installation date","CUSTOMER_NAME":"Customer Name","ADDR1":"Customer Address","CONNECTIVITY":"Connectivity Status","NUMBER_ALERTS":"Number of Alerts","SIM_STATUS":"Sim Status"};
	// $scope.fieldNames[] = ;
	$scope.reqFeilds=['EQPMT_ID',"LAST_BEAT","EQPMT_SRL_NUM_VAL","NUC_PART_NUMBER","SSD_FREESPACE","SOFTWARE_PLUGINS","SYSTEM_UPTIME","SIGNAL_STRENGTH"];
	$scope.reqFeilds2=["ROW_LAST_UPDT_DTM","SPIRE_VERSION","INSTALLATION_DATE","CUSTOMER_NAME","ADDR1","CONNECTIVITY","NUMBER_ALERTS","SIM_STATUS"];

	$scope.reqFeilds3=["SYSTEM_POWERONHOURS","SYSTEM_UPTIME","SYSTEM_FANSPEED","SYSTEM_CPUTEMPERATURE","SYSTEM_CPUSERIALNUMBER","SSD_FREESPACE","ROW_LAST_UPDT_DTM"];
	$scope.reqFeilds4=["SSD_TEMP","SSD_SERIALNUMBER","RAM_TOTAL","RAM_USAGE","SYSTEM_TEMP","SYSTEM_UNSAFESHUTDOWNCOUNT","CONNECTIVITY"];
}]);
