app.controller('equipmentController',['$scope','dataLoad','equipmentDtlsService','$http','$log', '$timeout','$location', 'uiGridConstants',function($scope,dataLoad,equipmentDtlsService,$http,$log,$timeout,$location,uiGridConstants){

$scope.initEquipmentMap=function (coords,tabeldata) {
        var coordinates = [
              {
                "EQPMT_ID": 9548108,
                "EVNT_TMSTMP": "2016-06-13 13:05:51.0",
                "KFID": 9901382,
                "COF": 8196683,
                "IDENT_ITEM_ID": 9183338,
                "DCC_BUSN_ENTTY_ID": 35503706,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #17084 (SERV.ONLY)",
                "LAT": 43.56396,
                "LNG": -80.275982,
                "ADDR1": "765 WOOLWICH ST",
                "CITY": "GUELPH",
                "ZIP": "N1H 3Z2",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 26: 06 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "CALIFORNIA RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK414006GQ",
                "EQPMT_UNDI_ID": 41713,
                "BUILDING_SUB_LOCATION_DSC": "front",
                "EQPMT_HLTH_RPRT_ID": 10963541,
                "SYSTEM_POWERONHOURS": 15030,
                "SYSTEM_UPTIME": "0d, 2h, 1m",
                "SYSTEM_FANSPEED": "3361 RPM",
                "SYSTEM_CPUTEMPERATURE": "67 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK414006GQ",
                "SOFTWARE_KIOSKFRAME": 15030,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "11 GB",
                "SSD_TEMP": "49 C",
                "SSD_SERIALNUMBER": "CVLI410401PD030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3911 MB",
                "RAM_USAGE": "2379 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 24,
                "ROW_CRT_DTM": "2016-06-13 10:06:38.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:38.0"
              },
              {
                "EQPMT_ID": 11624959,
                "EVNT_TMSTMP": "2016-06-13 13:01:56.0",
                "KFID": 201196,
                "COF": 9760128,
                "IDENT_ITEM_ID": 9384542,
                "DCC_BUSN_ENTTY_ID": 35505512,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #21037 (SERV.ONLY)",
                "LAT": 44.57433,
                "LNG": -80.9204,
                "ADDR1": "1350 16TH ST E",
                "CITY": "OWEN SOUND",
                "ZIP": "N4K 6N7",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-13-2016 09: 15: 42 PM",
                "CUSTOMER_NAME": "1012 PBC FAIRBANKS AK",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK53500FZ1",
                "EQPMT_UNDI_ID": 42552,
                "BUILDING_SUB_LOCATION_DSC": "in",
                "EQPMT_HLTH_RPRT_ID": 10965433,
                "SYSTEM_POWERONHOURS": 3504,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3211 RPM",
                "SYSTEM_CPUTEMPERATURE": "64 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53500FZ1",
                "SOFTWARE_KIOSKFRAME": 3504,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "12 GB",
                "SSD_TEMP": "44 C",
                "SSD_SERIALNUMBER": "CVLI452100UZ030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3867 MB",
                "RAM_USAGE": "2183 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:09:30.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:09:30.0"
              },
              {
                "EQPMT_ID": 12509751,
                "EVNT_TMSTMP": "2016-06-13 13:01:52.0",
                "KFID": 202152,
                "COF": 3508158,
                "IDENT_ITEM_ID": 9405352,
                "DCC_BUSN_ENTTY_ID": 35506305,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #50417 (SERV.ONLY)",
                "LAT": 49.158475,
                "LNG": -122.782061,
                "ADDR1": "15905 FRASER HWY SUITE 103",
                "CITY": "SURREY",
                "ZIP": "V4N 0Y3",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "05-03-2016 09: 34: 55 PM",
                "CUSTOMER_NAME": "1315 PBC SYRACUSE NY",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK55000GTM",
                "EQPMT_UNDI_ID": 42795,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10964928,
                "SYSTEM_POWERONHOURS": 2941,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3466 RPM",
                "SYSTEM_CPUTEMPERATURE": "57 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK55000GTM",
                "SOFTWARE_KIOSKFRAME": 2941,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI539100EL030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3876 MB",
                "RAM_USAGE": "2005 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 4,
                "ROW_CRT_DTM": "2016-06-13 10:07:25.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:25.0"
              },
              {
                "EQPMT_ID": 13101397,
                "EVNT_TMSTMP": "2016-06-13 13:01:50.0",
                "KFID": 202697,
                "COF": 9760372,
                "IDENT_ITEM_ID": 9408735,
                "DCC_BUSN_ENTTY_ID": 35507816,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #31175 (SERV.ONLY)",
                "LAT": 49.974551,
                "LNG": -98.328353,
                "ADDR1": "50 24TH ST NW UNIT A",
                "CITY": "PORTAGE LA PRAIRIE",
                "ZIP": "R1N 3B5",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Technical Issues",
                "LAST_BEAT": "04-21-2016 07: 39: 22 PM",
                "CUSTOMER_NAME": "1047 PBC WILLIAMSPORT PA",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK55000GPF",
                "EQPMT_UNDI_ID": 43195,
                "BUILDING_SUB_LOCATION_DSC": "inside1",
                "EQPMT_HLTH_RPRT_ID": 10965210,
                "SYSTEM_POWERONHOURS": 2605,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3451 RPM",
                "SYSTEM_CPUTEMPERATURE": "67 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK55000GPF",
                "SOFTWARE_KIOSKFRAME": 2605,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "40 C",
                "SSD_SERIALNUMBER": "CVLI539100AN030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3718 MB",
                "RAM_USAGE": "1927 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:07:56.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:56.0"
              },
              {
                "EQPMT_ID": 13998205,
                "EVNT_TMSTMP": "2016-06-13 13:01:48.0",
                "KFID": 203261,
                "COF": 8730892,
                "IDENT_ITEM_ID": 9411207,
                "DCC_BUSN_ENTTY_ID": 35508304,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #07653 (SERV.ONLY)",
                "LAT": 55.16982,
                "LNG": -118.79586,
                "ADDR1": "10012 99 AVE",
                "CITY": "GRANDE PRAIRIE",
                "ZIP": "T8V 0R9",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Technical Issues",
                "LAST_BEAT": "06-14-2016 03: 19: 55 PM",
                "CUSTOMER_NAME": "1064 PBC ELKINS WV",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK54700178",
                "EQPMT_UNDI_ID": 43740,
                "BUILDING_SUB_LOCATION_DSC": "SPIRE",
                "EQPMT_HLTH_RPRT_ID": 10963452,
                "SYSTEM_POWERONHOURS": 2419,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3393 RPM",
                "SYSTEM_CPUTEMPERATURE": "62 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK54700178",
                "SOFTWARE_KIOSKFRAME": 2419,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "15 GB",
                "SSD_TEMP": "42 C",
                "SSD_SERIALNUMBER": "CVLI539100E8030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3880 MB",
                "RAM_USAGE": "2001 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 2,
                "ROW_CRT_DTM": "2016-06-13 10:05:12.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:05:12.0"
              },
              {
                "EQPMT_ID": 6162829,
                "EVNT_TMSTMP": "2016-03-16 17:01:14.0",
                "KFID": 1100902,
                "COF": 9913640,
                "IDENT_ITEM_ID": 9300596,
                "DCC_BUSN_ENTTY_ID": 35498439,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #35614 (SERV.ONLY)",
                "LAT": 49.85419,
                "LNG": -97.16441,
                "ADDR1": "1180 TAYLOR AVE",
                "CITY": "WINNIPEG",
                "ZIP": "R3M 3Z4",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "04-21-2016 07: 39: 22 PM",
                "CUSTOMER_NAME": "1064 PBC ELKINS WV",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK52000EOX",
                "EQPMT_UNDI_ID": 39703,
                "BUILDING_SUB_LOCATION_DSC": "inside1",
                "EQPMT_HLTH_RPRT_ID": 10530705,
                "SYSTEM_POWERONHOURS": 3588,
                "SYSTEM_UPTIME": "2d, 12h, 0m",
                "SYSTEM_FANSPEED": "3385 RPM",
                "SYSTEM_CPUTEMPERATURE": "63 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK52000E0X",
                "SOFTWARE_KIOSKFRAME": 3588,
                "SOFTWARE_PLUGINS": "1.1.212.429",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2",
                "SSD_FREESPACE": "11 GB",
                "SSD_TEMP": "51 C",
                "SSD_SERIALNUMBER": "CVLI448600VS030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3831 MB",
                "RAM_USAGE": "2278 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 9,
                "ROW_CRT_DTM": "2016-06-07 03:16:43.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-07 03:16:43.0"
              },
              {
                "EQPMT_ID": 9898877,
                "EVNT_TMSTMP": "2016-06-13 13:01:49.0",
                "KFID": 200970,
                "COF": 9760851,
                "IDENT_ITEM_ID": 9384178,
                "DCC_BUSN_ENTTY_ID": 35506356,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #07962 (SERV.ONLY)",
                "LAT": 51.05943,
                "LNG": -114.05438,
                "ADDR1": "101-831 EDMONTON TRAIL NE",
                "CITY": "CALGARY",
                "ZIP": "T2E 3J8",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "06-14-2016 03: 22: 24 PM",
                "CUSTOMER_NAME": "1064 PBC ELKINS WV",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK53500F3J",
                "EQPMT_UNDI_ID": 42247,
                "BUILDING_SUB_LOCATION_DSC": "spire",
                "EQPMT_HLTH_RPRT_ID": 10965045,
                "SYSTEM_POWERONHOURS": 3454,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3446 RPM",
                "SYSTEM_CPUTEMPERATURE": "67 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53500F3J",
                "SOFTWARE_KIOSKFRAME": 3454,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "11 GB",
                "SSD_TEMP": "48 C",
                "SSD_SERIALNUMBER": "CVLI448601TC030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3874 MB",
                "RAM_USAGE": "2039 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:07:33.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:33.0"
              },
              {
                "EQPMT_ID": 13989992,
                "EVNT_TMSTMP": "2016-06-13 13:02:30.0",
                "KFID": 202457,
                "COF": 9763263,
                "IDENT_ITEM_ID": 9411206,
                "DCC_BUSN_ENTTY_ID": 35508277,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #12563 (SERV.ONLY)",
                "LAT": 53.020617,
                "LNG": -112.823748,
                "ADDR1": "4903 49 ST",
                "CITY": "CAMROSE",
                "ZIP": "T4V 1N3",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 02: 58: 05 PM",
                "CUSTOMER_NAME": "1064 PBC ELKINS WV",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK547001HC",
                "EQPMT_UNDI_ID": 43742,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965071,
                "SYSTEM_POWERONHOURS": 2470,
                "SYSTEM_UPTIME": "0d, 8h, 2m",
                "SYSTEM_FANSPEED": "3394 RPM",
                "SYSTEM_CPUTEMPERATURE": "59 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK547001HC",
                "SOFTWARE_KIOSKFRAME": 2470,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "42 C",
                "SSD_SERIALNUMBER": "CVLI5391002W030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3881 MB",
                "RAM_USAGE": "2132 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 4,
                "ROW_CRT_DTM": "2016-06-13 10:07:35.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:35.0"
              },
              {
                "EQPMT_ID": 14581340,
                "EVNT_TMSTMP": "2016-04-11 03:18:15.0",
                "KFID": 1102509,
                "COF": 9753982,
                "IDENT_ITEM_ID": 9381875,
                "DCC_BUSN_ENTTY_ID": 35506694,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #28869 (SERV.ONLY)",
                "LAT": 46.065428,
                "LNG": -64.799888,
                "ADDR1": "414 COVERDALE RD",
                "CITY": "RIVERVIEW",
                "ZIP": "E1B 3J9",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 22: 33 PM",
                "CUSTOMER_NAME": "1064 PBC ELKINS WV",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK539009RW",
                "EQPMT_UNDI_ID": 42836,
                "BUILDING_SUB_LOCATION_DSC": "inside1",
                "EQPMT_HLTH_RPRT_ID": 9229644,
                "SYSTEM_POWERONHOURS": 1958,
                "SYSTEM_UPTIME": "5d, 17h, 0m",
                "SYSTEM_FANSPEED": "3313 RPM",
                "SYSTEM_CPUTEMPERATURE": "56 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK539009RW",
                "SOFTWARE_KIOSKFRAME": 1958,
                "SOFTWARE_PLUGINS": "1.1.212.429",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "41 C",
                "SSD_SERIALNUMBER": "CVLI5252009B030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3747 MB",
                "RAM_USAGE": "1796 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 4,
                "ROW_CRT_DTM": "2016-05-19 19:48:38.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-19 19:48:38.0"
              },
              {
                "EQPMT_ID": 7714265,
                "EVNT_TMSTMP": "2016-06-13 13:01:05.0",
                "KFID": 1101932,
                "COF": 9760271,
                "IDENT_ITEM_ID": 9369921,
                "DCC_BUSN_ENTTY_ID": 35501937,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #47539 (SERV.ONLY)",
                "LAT": 45.41733,
                "LNG": -75.70201,
                "ADDR1": "407 LAURIER AVE W UNIT 51",
                "CITY": "OTTAWA",
                "ZIP": "K1R 7Y2",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 09: 53 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "CALIFORNIA RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK53200DUL",
                "EQPMT_UNDI_ID": 41905,
                "BUILDING_SUB_LOCATION_DSC": "inside1",
                "EQPMT_HLTH_RPRT_ID": 10963417,
                "SYSTEM_POWERONHOURS": 4460,
                "SYSTEM_UPTIME": "0d, 8h, 0m",
                "SYSTEM_FANSPEED": "3307 RPM",
                "SYSTEM_CPUTEMPERATURE": "67 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53200DUL",
                "SOFTWARE_KIOSKFRAME": 4460,
                "SOFTWARE_PLUGINS": "1.1.212.429",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2",
                "SSD_FREESPACE": "12 GB",
                "SSD_TEMP": "48 C",
                "SSD_SERIALNUMBER": "CVLI51330024030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3762 MB",
                "RAM_USAGE": "1903 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:04:40.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:04:40.0"
              },
              {
                "EQPMT_ID": 11655302,
                "EVNT_TMSTMP": "2016-06-13 13:01:52.0",
                "KFID": 201768,
                "COF": 8272037,
                "IDENT_ITEM_ID": 9394085,
                "DCC_BUSN_ENTTY_ID": 35506394,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #23133 (SERV.ONLY)",
                "LAT": 45.34226,
                "LNG": -72.04167,
                "ADDR1": "7369 BOUL BOURQUE",
                "CITY": "SHERBROOKE",
                "ZIP": "J1N 3M4",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-13-2016 09: 15: 40 PM",
                "CUSTOMER_NAME": "1315 PBC SYRACUSE NY",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK547000LZ",
                "EQPMT_UNDI_ID": 42616,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965095,
                "SYSTEM_POWERONHOURS": 2763,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3358 RPM",
                "SYSTEM_CPUTEMPERATURE": "64 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK547000LZ",
                "SOFTWARE_KIOSKFRAME": 2763,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "46 C",
                "SSD_SERIALNUMBER": "CVLI538200VN030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3861 MB",
                "RAM_USAGE": "2017 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 4,
                "ROW_CRT_DTM": "2016-06-13 10:07:37.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:37.0"
              },
              {
                "EQPMT_ID": 12236340,
                "EVNT_TMSTMP": "2016-06-13 13:01:52.0",
                "KFID": 204047,
                "COF": 9760380,
                "IDENT_ITEM_ID": 9405266,
                "DCC_BUSN_ENTTY_ID": 35506236,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #17422 (SERV.ONLY)",
                "LAT": 46.323585,
                "LNG": -79.432926,
                "ADDR1": "2541 TROUT LAKE RD",
                "CITY": "NORTH BAY",
                "ZIP": "P1B 7S8",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-12-2016 09: 43: 16 PM",
                "CUSTOMER_NAME": "1315 PBC SYRACUSE NY",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK5090075Q",
                "EQPMT_UNDI_ID": 43631,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963453,
                "SYSTEM_POWERONHOURS": 2802,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3086 RPM",
                "SYSTEM_CPUTEMPERATURE": "48 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK5090075Q",
                "SOFTWARE_KIOSKFRAME": 2802,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2.21312",
                "SSD_FREESPACE": "11 GB",
                "SSD_TEMP": "33 C",
                "SSD_SERIALNUMBER": "CVLI439400ZD030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3874 MB",
                "RAM_USAGE": "2044 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 5,
                "ROW_CRT_DTM": "2016-06-13 10:05:13.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:05:13.0"
              },
              {
                "EQPMT_ID": 9548624,
                "EVNT_TMSTMP": "2016-06-13 13:01:46.0",
                "KFID": 201480,
                "COF": 8741969,
                "IDENT_ITEM_ID": 9387563,
                "DCC_BUSN_ENTTY_ID": 35505557,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #15703 (SERV.ONLY)",
                "LAT": 49.24897,
                "LNG": -122.86238,
                "ADDR1": "1066A AUSTIN AVE",
                "CITY": "COQUITLAM",
                "ZIP": "V3K 3P3",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 06: 10 PM",
                "CUSTOMER_NAME": "1012 PBC FAIRBANKS AK",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK54700JYC",
                "EQPMT_UNDI_ID": 44339,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965264,
                "SYSTEM_POWERONHOURS": 3109,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3007 RPM",
                "SYSTEM_CPUTEMPERATURE": "47 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK54700JYC",
                "SOFTWARE_KIOSKFRAME": 3109,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2.21312",
                "SSD_FREESPACE": "13 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI550100Z8030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3877 MB",
                "RAM_USAGE": "1976 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 7,
                "ROW_CRT_DTM": "2016-06-13 10:08:06.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:08:06.0"
              },
              {
                "EQPMT_ID": 12947356,
                "EVNT_TMSTMP": "2016-06-13 13:01:49.0",
                "KFID": 201880,
                "COF": 8624740,
                "IDENT_ITEM_ID": 9399662,
                "DCC_BUSN_ENTTY_ID": 35507472,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #15768 (SERV.ONLY)",
                "LAT": 49.18975,
                "LNG": -119.55225,
                "ADDR1": "35609 HWY 97",
                "CITY": "OLIVER",
                "ZIP": "V0H 1T0",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-12-2016 02: 46: 08 PM",
                "CUSTOMER_NAME": "1012 PBC FAIRBANKS AK",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "N NEW ENGLAND MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK54400772",
                "EQPMT_UNDI_ID": 42758,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963512,
                "SYSTEM_POWERONHOURS": 2660,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3370 RPM",
                "SYSTEM_CPUTEMPERATURE": "60 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK54400772",
                "SOFTWARE_KIOSKFRAME": 2660,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "40 C",
                "SSD_SERIALNUMBER": "CVLI538200JH030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3876 MB",
                "RAM_USAGE": "1985 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 7,
                "ROW_CRT_DTM": "2016-06-13 10:06:03.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:03.0"
              },
              {
                "EQPMT_ID": 26359616,
                "EVNT_TMSTMP": "2016-01-13 20:10:19.0",
                "KFID": 201161,
                "COF": 8619675,
                "IDENT_ITEM_ID": 9385331,
                "DCC_BUSN_ENTTY_ID": 35504282,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #13639 (SERV.ONLY)",
                "LAT": 49.219085,
                "LNG": -122.968308,
                "ADDR1": "6569 KINGSWAY UNIT 102 B",
                "CITY": "BURNABY",
                "ZIP": "V5E 1E1",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "04-21-2016 07: 39: 22 PM",
                "CUSTOMER_NAME": "1012 PBC FAIRBANKS AK",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK53700MFS",
                "EQPMT_UNDI_ID": 44515,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 8732753,
                "SYSTEM_POWERONHOURS": 11,
                "SYSTEM_UPTIME": "0d, 3h, 0m",
                "SYSTEM_FANSPEED": "3383 RPM",
                "SYSTEM_CPUTEMPERATURE": "63 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53700MFS",
                "SOFTWARE_KIOSKFRAME": 11,
                "SOFTWARE_PLUGINS": "1.1.212.429",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2",
                "SSD_FREESPACE": "17 GB",
                "SSD_TEMP": "47 C",
                "SSD_SERIALNUMBER": "CVLI525200B5030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3764 MB",
                "RAM_USAGE": "1909 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 5,
                "ROW_CRT_DTM": "2016-05-19 10:30:59.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-19 10:30:59.0"
              },
              {
                "EQPMT_ID": 169524,
                "EVNT_TMSTMP": "2016-03-09 16:01:51.0",
                "KFID": 9901418,
                "COF": 9851316,
                "IDENT_ITEM_ID": 9052464,
                "DCC_BUSN_ENTTY_ID": 7345533,
                "DCC_BUSN_ENTTY_NM": "FLIK@PEPSI BOTTLING CAFE",
                "LAT": 0,
                "LNG": 0,
                "ADDR1": "1 PEPSI WAY 5S/532",
                "CITY": "SOMERS",
                "ZIP": 10589,
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Activation / Installation Issues",
                "LAST_BEAT": "06-14-2016 03: 17: 40 PM",
                "CUSTOMER_NAME": "1012 PBC FAIRBANKS AK",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK40300C1F",
                "EQPMT_UNDI_ID": 41205,
                "BUILDING_SUB_LOCATION_DSC": "Cafeteria 3",
                "EQPMT_HLTH_RPRT_ID": 3935117,
                "SYSTEM_POWERONHOURS": 16034,
                "SYSTEM_UPTIME": "2d, 12h, 1m",
                "SYSTEM_FANSPEED": "3211 RPM",
                "SYSTEM_CPUTEMPERATURE": "67 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK40300C1F",
                "SOFTWARE_KIOSKFRAME": 16034,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "13 GB",
                "SSD_TEMP": "47 C",
                "SSD_SERIALNUMBER": "CVLI345300DJ030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3742 MB",
                "RAM_USAGE": "2157 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 62,
                "ROW_CRT_DTM": "2016-03-09 22:31:30.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-03-09 22:31:30.0"
              },
              {
                "EQPMT_ID": 270607,
                "EVNT_TMSTMP": "2016-06-13 13:02:50.0",
                "KFID": 9901614,
                "COF": 7136539,
                "IDENT_ITEM_ID": 9170623,
                "DCC_BUSN_ENTTY_ID": 34961826,
                "DCC_BUSN_ENTTY_NM": "ARBY'S",
                "LAT": 45.052919,
                "LNG": -93.322856,
                "ADDR1": "5444 BROOKLYN BLVD",
                "CITY": "BROOKLYN CENTER",
                "ZIP": 554293360,
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-10-2016 09: 12: 01 PM",
                "CUSTOMER_NAME": "1012 PBC FAIRBANKS AK",
                "REGION": "MIDWEST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK34800685",
                "EQPMT_UNDI_ID": 35083,
                "BUILDING_SUB_LOCATION_DSC": "LOBBY LEFT UNIT.",
                "EQPMT_HLTH_RPRT_ID": 10965490,
                "SYSTEM_POWERONHOURS": 10729,
                "SYSTEM_UPTIME": "0d, 8h, 2m",
                "SYSTEM_FANSPEED": "2856 RPM",
                "SYSTEM_CPUTEMPERATURE": "57 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK34800685",
                "SOFTWARE_KIOSKFRAME": 10729,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2.21312",
                "SSD_FREESPACE": "3 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI413501DU030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3806 MB",
                "RAM_USAGE": "2496 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 107,
                "ROW_CRT_DTM": "2016-06-13 10:11:02.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:11:02.0"
              },
              {
                "EQPMT_ID": 9898708,
                "EVNT_TMSTMP": "2016-06-13 13:01:49.0",
                "KFID": 1102219,
                "COF": 3506625,
                "IDENT_ITEM_ID": 9376534,
                "DCC_BUSN_ENTTY_ID": 35504354,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #56543 (SERV.ONLY)",
                "LAT": 45.16683,
                "LNG": -72.03885,
                "ADDR1": "1160 MAIN ST",
                "CITY": "AYER'S CLIFF",
                "ZIP": "J0B 1C0",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "04-21-2016 07: 39: 22 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK53200DSM",
                "EQPMT_UNDI_ID": 42349,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965191,
                "SYSTEM_POWERONHOURS": 3483,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3394 RPM",
                "SYSTEM_CPUTEMPERATURE": "61 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53200DSM",
                "SOFTWARE_KIOSKFRAME": 3483,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "13 GB",
                "SSD_TEMP": "43 C",
                "SSD_SERIALNUMBER": "CVLI525200EB030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3861 MB",
                "RAM_USAGE": "1910 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 9,
                "ROW_CRT_DTM": "2016-06-13 10:07:54.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:54.0"
              },
              {
                "EQPMT_ID": 11640981,
                "EVNT_TMSTMP": "2016-06-13 13:01:54.0",
                "KFID": 1102434,
                "COF": 8272153,
                "IDENT_ITEM_ID": 9372467,
                "DCC_BUSN_ENTTY_ID": 35505547,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #15318 (SERV.ONLY)",
                "LAT": 45.41417,
                "LNG": -73.01112,
                "ADDR1": "2017 112 RTE SUITE 2",
                "CITY": "SAINT-CESAIRE",
                "ZIP": "J0L 1T0",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "04-21-2016 07: 39: 22 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK53200EHW",
                "EQPMT_UNDI_ID": 42997,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963943,
                "SYSTEM_POWERONHOURS": 3353,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3299 RPM",
                "SYSTEM_CPUTEMPERATURE": "63 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53200EHW",
                "SOFTWARE_KIOSKFRAME": 3353,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "12 GB",
                "SSD_TEMP": "44 C",
                "SSD_SERIALNUMBER": "CVLI5263006C030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3866 MB",
                "RAM_USAGE": "2086 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 5,
                "ROW_CRT_DTM": "2016-06-13 10:06:55.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:55.0"
              },
              {
                "EQPMT_ID": 13652794,
                "EVNT_TMSTMP": "2016-06-13 04:27:04.0",
                "KFID": 201944,
                "COF": 8120803,
                "IDENT_ITEM_ID": 9399141,
                "DCC_BUSN_ENTTY_ID": 35507377,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #31288 (SERV.ONLY)",
                "LAT": 42.881705,
                "LNG": -80.7499,
                "ADDR1": "670 BROADWAY ST UNIT A",
                "CITY": "TILLSONBURG",
                "ZIP": "N4G 3S9",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Activation / Installation Issues",
                "LAST_BEAT": "04-21-2016 07: 39: 22 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK544007R0",
                "EQPMT_UNDI_ID": 43323,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10920770,
                "SYSTEM_POWERONHOURS": 2955,
                "SYSTEM_UPTIME": "6d, 23h, 26m",
                "SYSTEM_FANSPEED": "3359 RPM",
                "SYSTEM_CPUTEMPERATURE": "57 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK544007R0",
                "SOFTWARE_KIOSKFRAME": 2955,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI5391003L030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3854 MB",
                "RAM_USAGE": "2498 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 8,
                "ROW_CRT_DTM": "2016-06-13 01:37:47.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 01:37:47.0"
              },
              {
                "EQPMT_ID": 13664465,
                "EVNT_TMSTMP": "2016-06-13 13:01:47.0",
                "KFID": 204014,
                "COF": 8120150,
                "IDENT_ITEM_ID": 9402062,
                "DCC_BUSN_ENTTY_ID": 35507592,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #20947 (SERV.ONLY)",
                "LAT": 43.44179,
                "LNG": -79.6724,
                "ADDR1": "4 LAKESHORE RD W",
                "CITY": "OAKVILLE",
                "ZIP": "L6K 1C5",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "06-14-2016 03: 19: 19 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK5440083G",
                "EQPMT_UNDI_ID": 43374,
                "BUILDING_SUB_LOCATION_DSC": "IN1",
                "EQPMT_HLTH_RPRT_ID": 10963689,
                "SYSTEM_POWERONHOURS": 2613,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3311 RPM",
                "SYSTEM_CPUTEMPERATURE": "67 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK5440083G",
                "SOFTWARE_KIOSKFRAME": 2613,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "45 C",
                "SSD_SERIALNUMBER": "CVLI539100D5030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3881 MB",
                "RAM_USAGE": "2026 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 4,
                "ROW_CRT_DTM": "2016-06-13 10:06:49.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:49.0"
              },
              {
                "EQPMT_ID": 15307115,
                "EVNT_TMSTMP": "2016-06-13 13:01:48.0",
                "KFID": 202235,
                "COF": 3511404,
                "IDENT_ITEM_ID": 9424169,
                "DCC_BUSN_ENTTY_ID": 35515188,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #22616 (EQUIP)",
                "LAT": 49.126,
                "LNG": -66.485,
                "ADDR1": "5 BOUL SAINTE-ANNE O",
                "CITY": "STE-ANNE-DES-MONTS",
                "ZIP": "G4V 1P4",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 13: 59 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK55000H66",
                "EQPMT_UNDI_ID": 44098,
                "BUILDING_SUB_LOCATION_DSC": "BRP",
                "EQPMT_HLTH_RPRT_ID": 10965609,
                "SYSTEM_POWERONHOURS": 964,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3458 RPM",
                "SYSTEM_CPUTEMPERATURE": "71 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK55000H66",
                "SOFTWARE_KIOSKFRAME": 964,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "16 GB",
                "SSD_TEMP": "47 C",
                "SSD_SERIALNUMBER": "CVLI550100R7030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3717 MB",
                "RAM_USAGE": "1832 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 2,
                "ROW_CRT_DTM": "2016-06-13 10:15:13.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:15:13.0"
              },
              {
                "EQPMT_ID": 280375,
                "EVNT_TMSTMP": "2016-06-13 13:01:41.0",
                "KFID": 9901271,
                "COF": 3342313,
                "IDENT_ITEM_ID": 9024110,
                "DCC_BUSN_ENTTY_ID": 34966760,
                "DCC_BUSN_ENTTY_NM": "BUFFALO WILD WINGS 418",
                "LAT": 43.0374,
                "LNG": -88.122613,
                "ADDR1": "16750 W BLUEMOUND RD STE G",
                "CITY": "BROOKFIELD",
                "ZIP": 530055960,
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 18: 30 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK30100NU8",
                "EQPMT_UNDI_ID": 35857,
                "BUILDING_SUB_LOCATION_DSC": "inside",
                "EQPMT_HLTH_RPRT_ID": 10963429,
                "SYSTEM_POWERONHOURS": 18212,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "2945 RPM",
                "SYSTEM_CPUTEMPERATURE": "50 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK30100NU8",
                "SOFTWARE_KIOSKFRAME": 18212,
                "SOFTWARE_PLUGINS": "1.1.121.427",
                "SOFTWARE_CREWMODE": "True",
                "VALVECONTROLLER_FIRMWARE": "1.6.2",
                "SSD_FREESPACE": "11 GB",
                "SSD_TEMP": "40 C",
                "SSD_SERIALNUMBER": "CVLI314200P0030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3753 MB",
                "RAM_USAGE": "1813 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 21,
                "ROW_CRT_DTM": "2016-06-13 10:04:51.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:04:51.0"
              },
              {
                "EQPMT_ID": 11924683,
                "EVNT_TMSTMP": "2016-06-13 13:04:33.0",
                "KFID": 1100599,
                "COF": 3490974,
                "IDENT_ITEM_ID": 9290811,
                "DCC_BUSN_ENTTY_ID": 35505718,
                "DCC_BUSN_ENTTY_NM": "CALI TACOS",
                "LAT": 33.7879,
                "LNG": -117.870184,
                "ADDR1": "1639 W CHAPMAN AVE",
                "CITY": "ORANGE",
                "ZIP": 928682707,
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 13: 05 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "NEW JERSEY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK51400VU9",
                "EQPMT_UNDI_ID": 42629,
                "BUILDING_SUB_LOCATION_DSC": "BEV ARE",
                "EQPMT_HLTH_RPRT_ID": 10963486,
                "SYSTEM_POWERONHOURS": 6935,
                "SYSTEM_UPTIME": "0d, 4h, 0m",
                "SYSTEM_FANSPEED": "3326 RPM",
                "SYSTEM_CPUTEMPERATURE": "60 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK51400VU9",
                "SOFTWARE_KIOSKFRAME": 6935,
                "SOFTWARE_PLUGINS": "1.1.212.429",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2",
                "SSD_FREESPACE": "6 GB",
                "SSD_TEMP": "51 C",
                "SSD_SERIALNUMBER": "CVLI4500021L030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "4007 MB",
                "RAM_USAGE": "3373 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 10,
                "ROW_CRT_DTM": "2016-06-13 10:05:39.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:05:39.0"
              },
              {
                "EQPMT_ID": 13660843,
                "EVNT_TMSTMP": "2016-06-13 13:01:51.0",
                "KFID": 203932,
                "COF": 8117109,
                "IDENT_ITEM_ID": 9402059,
                "DCC_BUSN_ENTTY_ID": 35507502,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #29715 (SERV.ONLY)",
                "LAT": 43.5586538,
                "LNG": -79.741602,
                "ADDR1": "5602 TENTH LINE W UNIT 113",
                "CITY": "MISSISSAUGA",
                "ZIP": "L5M 7L9",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Activation / Installation Issues",
                "LAST_BEAT": "06-14-2016 03: 26: 50 PM",
                "CUSTOMER_NAME": "1047 PBC WILLIAMSPORT PA",
                "REGION": "NORTHEAST RGN",
                "MARKET_UNIT": "UPSTATE E NY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK537013G2",
                "EQPMT_UNDI_ID": 43362,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10964819,
                "SYSTEM_POWERONHOURS": 2659,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3379 RPM",
                "SYSTEM_CPUTEMPERATURE": "66 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK537013G2",
                "SOFTWARE_KIOSKFRAME": 2659,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "45 C",
                "SSD_SERIALNUMBER": "CVLI536400EX030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3874 MB",
                "RAM_USAGE": "2164 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 1,
                "ROW_CRT_DTM": "2016-06-13 10:07:19.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:19.0"
              },
              {
                "EQPMT_ID": 246915,
                "EVNT_TMSTMP": "2016-05-01 02:36:59.0",
                "KFID": 9901442,
                "COF": 9831230,
                "IDENT_ITEM_ID": 9149999,
                "DCC_BUSN_ENTTY_ID": 34967902,
                "DCC_BUSN_ENTTY_NM": "FLIPSIDE ENTERTAINMENT",
                "LAT": 33.2621822,
                "LNG": -111.7569964,
                "ADDR1": "4874 S Val Vista Dr",
                "CITY": "Gilbert",
                "ZIP": 852980000,
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 02: 44: 44 PM",
                "CUSTOMER_NAME": "1047 PBC WILLIAMSPORT PA",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "UPSTATE E NY MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK40300123",
                "EQPMT_UNDI_ID": 34408,
                "BUILDING_SUB_LOCATION_DSC": "spire install 2",
                "EQPMT_HLTH_RPRT_ID": 7520259,
                "SYSTEM_POWERONHOURS": 10566,
                "SYSTEM_UPTIME": "0d, 15h, 1m",
                "SYSTEM_FANSPEED": "3379 RPM",
                "SYSTEM_CPUTEMPERATURE": "61 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK40300123",
                "SOFTWARE_KIOSKFRAME": 10566,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.1.2.21312",
                "SSD_FREESPACE": "10 GB",
                "SSD_TEMP": "39 C",
                "SSD_SERIALNUMBER": "CVLI413500T9030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3796 MB",
                "RAM_USAGE": "2262 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 27,
                "ROW_CRT_DTM": "2016-05-01 02:50:10.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-01 02:50:10.0"
              },
              {
                "EQPMT_ID": 3113486,
                "EVNT_TMSTMP": "2016-06-13 13:33:06.0",
                "KFID": 1100517,
                "COF": 9298567,
                "IDENT_ITEM_ID": 9188637,
                "DCC_BUSN_ENTTY_ID": 35016895,
                "DCC_BUSN_ENTTY_NM": "EUREST@PEPSICO",
                "LAT": 42.1542,
                "LNG": -88.1482,
                "ADDR1": "617 W Main St",
                "CITY": "Barrington",
                "ZIP": 60010,
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 13: 05 PM",
                "CUSTOMER_NAME": "1010 PBC ANCHORAGE AK",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "UPSTATE E NY MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK403001V4",
                "EQPMT_UNDI_ID": 33041,
                "BUILDING_SUB_LOCATION_DSC": "CAFE",
                "EQPMT_HLTH_RPRT_ID": 10966019,
                "SYSTEM_POWERONHOURS": 1574,
                "SYSTEM_UPTIME": "0d, 6h, 1m",
                "SYSTEM_FANSPEED": "2933 RPM",
                "SYSTEM_CPUTEMPERATURE": "48 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK403001V4",
                "SOFTWARE_KIOSKFRAME": 1574,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "35 C",
                "SSD_SERIALNUMBER": "CVLI414400SS030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3788 MB",
                "RAM_USAGE": "1779 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 160,
                "ROW_CRT_DTM": "2016-06-13 10:36:47.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:36:47.0"
              },
              {
                "EQPMT_ID": 7104901,
                "EVNT_TMSTMP": "2016-06-13 13:01:00.0",
                "KFID": 1101680,
                "COF": 9754211,
                "IDENT_ITEM_ID": 9364120,
                "DCC_BUSN_ENTTY_ID": 35500360,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #37291 (SERV.ONLY)",
                "LAT": 42.91238,
                "LNG": -81.29076,
                "ADDR1": "2295 WHARNCLIFFE RD S UNIT 4",
                "CITY": "LONDON",
                "ZIP": "N6P 1S7",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 05: 53 PM",
                "CUSTOMER_NAME": "1010 PBC ANCHORAGE AK",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "UPSTATE E NY MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK52800H8H",
                "EQPMT_UNDI_ID": 41378,
                "BUILDING_SUB_LOCATION_DSC": "in2",
                "EQPMT_HLTH_RPRT_ID": 10963521,
                "SYSTEM_POWERONHOURS": 4823,
                "SYSTEM_UPTIME": "0d, 8h, 0m",
                "SYSTEM_FANSPEED": "3425 RPM",
                "SYSTEM_CPUTEMPERATURE": "65 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK52800H8H",
                "SOFTWARE_KIOSKFRAME": 4823,
                "SOFTWARE_PLUGINS": "1.1.212.429",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2",
                "SSD_FREESPACE": "11 GB",
                "SSD_TEMP": "54 C",
                "SSD_SERIALNUMBER": "CVLI452100GM030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3993 MB",
                "RAM_USAGE": "2305 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 6,
                "ROW_CRT_DTM": "2016-06-13 10:06:11.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:11.0"
              },
              {
                "EQPMT_ID": 9900439,
                "EVNT_TMSTMP": "2016-06-13 13:01:52.0",
                "KFID": 201197,
                "COF": 9760433,
                "IDENT_ITEM_ID": 9384544,
                "DCC_BUSN_ENTTY_ID": 35504433,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #43958 (SERV.ONLY)",
                "LAT": 48.441085,
                "LNG": -89.21264,
                "ADDR1": "190 CUMBERLAND ST N",
                "CITY": "THUNDER BAY",
                "ZIP": "P7A 4M8",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 08: 03 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "UPSTATE E NY MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK54300GYC",
                "EQPMT_UNDI_ID": 42301,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963566,
                "SYSTEM_POWERONHOURS": 3510,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3298 RPM",
                "SYSTEM_CPUTEMPERATURE": "58 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK54300GYC",
                "SOFTWARE_KIOSKFRAME": 3510,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "9 GB",
                "SSD_TEMP": "42 C",
                "SSD_SERIALNUMBER": "CVLI51330090030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3796 MB",
                "RAM_USAGE": "1762 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 1,
                "ROW_CRT_DTM": "2016-06-13 10:06:42.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:42.0"
              },
              {
                "EQPMT_ID": 11607803,
                "EVNT_TMSTMP": "2016-06-13 13:01:48.0",
                "KFID": 201975,
                "COF": 9760434,
                "IDENT_ITEM_ID": 9393350,
                "DCC_BUSN_ENTTY_ID": 35508162,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #22540 (SERV.ONLY)",
                "LAT": 49.6950129,
                "LNG": -83.612863,
                "ADDR1": "3- 15 ST BOX 2271",
                "CITY": "HEARST",
                "ZIP": "P0L 1N0",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 10: 59: 38 AM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK537013EW",
                "EQPMT_UNDI_ID": 42647,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963887,
                "SYSTEM_POWERONHOURS": 2595,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3278 RPM",
                "SYSTEM_CPUTEMPERATURE": "57 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK537013EW",
                "SOFTWARE_KIOSKFRAME": 2595,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "15 GB",
                "SSD_TEMP": "45 C",
                "SSD_SERIALNUMBER": "CVLI5252002R030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3724 MB",
                "RAM_USAGE": "1757 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 11,
                "ROW_CRT_DTM": "2016-06-13 10:06:54.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:54.0"
              },
              {
                "EQPMT_ID": 12814947,
                "EVNT_TMSTMP": "2016-06-13 13:01:48.0",
                "KFID": 203885,
                "COF": 9760121,
                "IDENT_ITEM_ID": 9403874,
                "DCC_BUSN_ENTTY_ID": 35506364,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #15497 (SERV.ONLY)",
                "LAT": 45.48096,
                "LNG": -75.68753,
                "ADDR1": "120 BOUL DE L'HOPITAL UNITE 125",
                "CITY": "GATINEAU",
                "ZIP": "J8T 8M2",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "06-13-2016 09: 20: 35 PM",
                "CUSTOMER_NAME": "1047 PBC WILLIAMSPORT PA",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK527000T5",
                "EQPMT_UNDI_ID": 43564,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963962,
                "SYSTEM_POWERONHOURS": 2812,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3253 RPM",
                "SYSTEM_CPUTEMPERATURE": "60 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK527000T5",
                "SOFTWARE_KIOSKFRAME": 2812,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "13 GB",
                "SSD_TEMP": "43 C",
                "SSD_SERIALNUMBER": "CVLI535600PB030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3865 MB",
                "RAM_USAGE": "2077 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 6,
                "ROW_CRT_DTM": "2016-06-13 10:06:55.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:55.0"
              },
              {
                "EQPMT_ID": 13381165,
                "EVNT_TMSTMP": "2016-06-13 13:01:46.0",
                "KFID": 203310,
                "COF": 8700161,
                "IDENT_ITEM_ID": 9408057,
                "DCC_BUSN_ENTTY_ID": 35507194,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #13591 (SERV.ONLY)",
                "LAT": 49.27959,
                "LNG": -123.13003,
                "ADDR1": "1046 DAVIE ST",
                "CITY": "VANCOUVER",
                "ZIP": "V6E 1M3",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 02: 47: 12 PM",
                "CUSTOMER_NAME": "1047 PBC WILLIAMSPORT PA",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 116,
                "EQPMT_SRL_NUM_VAL": "GEGK55000GX5",
                "EQPMT_UNDI_ID": 43279,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965017,
                "SYSTEM_POWERONHOURS": 2733,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3475 RPM",
                "SYSTEM_CPUTEMPERATURE": "60 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK55000GX5",
                "SOFTWARE_KIOSKFRAME": 2733,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "42 C",
                "SSD_SERIALNUMBER": "CVLI550100HN030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3876 MB",
                "RAM_USAGE": "2026 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 5,
                "ROW_CRT_DTM": "2016-06-13 10:07:31.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:31.0"
              },
              {
                "EQPMT_ID": 13382608,
                "EVNT_TMSTMP": "2016-06-13 13:01:51.0",
                "KFID": 203193,
                "COF": 8610469,
                "IDENT_ITEM_ID": 9405340,
                "DCC_BUSN_ENTTY_ID": 35508284,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #15009 (SERV.ONLY)",
                "LAT": 54.312224,
                "LNG": -130.32778,
                "ADDR1": "601 2ND AVE W",
                "CITY": "PRINCE RUPERT",
                "ZIP": "V8J 1H1",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 10: 59: 38 AM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 1123,
                "EQPMT_SRL_NUM_VAL": "GEGK5510119K",
                "EQPMT_UNDI_ID": 43255,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963808,
                "SYSTEM_POWERONHOURS": 2464,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3476 RPM",
                "SYSTEM_CPUTEMPERATURE": "50 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK5510119K",
                "SOFTWARE_KIOSKFRAME": 2464,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "36 C",
                "SSD_SERIALNUMBER": "CVLI5501017R030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3881 MB",
                "RAM_USAGE": "2063 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 6,
                "ROW_CRT_DTM": "2016-06-13 10:06:52.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:52.0"
              },
              {
                "EQPMT_ID": 6164919,
                "EVNT_TMSTMP": "2016-06-13 13:01:52.0",
                "KFID": 1100824,
                "COF": 8623226,
                "IDENT_ITEM_ID": 9310106,
                "DCC_BUSN_ENTTY_ID": 35498408,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #14599-FSD",
                "LAT": 49.15519,
                "LNG": -123.95092,
                "ADDR1": "530 5 ST UNIT 808",
                "CITY": "NANAIMO",
                "ZIP": "V9R 1P1",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 05: 36 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK51400U39",
                "EQPMT_UNDI_ID": 39728,
                "BUILDING_SUB_LOCATION_DSC": "inside 2",
                "EQPMT_HLTH_RPRT_ID": 10965560,
                "SYSTEM_POWERONHOURS": 5831,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3425 RPM",
                "SYSTEM_CPUTEMPERATURE": "57 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK51400U39",
                "SOFTWARE_KIOSKFRAME": 5831,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "7 GB",
                "SSD_TEMP": "41 C",
                "SSD_SERIALNUMBER": "CVLI450001LZ030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3869 MB",
                "RAM_USAGE": "2269 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:12:55.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:12:55.0"
              },
              {
                "EQPMT_ID": 8375072,
                "EVNT_TMSTMP": "2016-05-31 07:56:30.0",
                "KFID": 1100429,
                "COF": 9429105,
                "IDENT_ITEM_ID": 9281617,
                "DCC_BUSN_ENTTY_ID": 35502573,
                "DCC_BUSN_ENTTY_NM": "Christ Hosp Cafeteria Health Allian",
                "LAT": 39.12087,
                "LNG": -84.50854,
                "ADDR1": "2139 Auburn Ave",
                "CITY": "Cincinnati",
                "ZIP": 45219,
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 02: 48: 25 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK348006EE",
                "EQPMT_UNDI_ID": 38093,
                "BUILDING_SUB_LOCATION_DSC": "Main Cafeteria 1a",
                "EQPMT_HLTH_RPRT_ID": 10087436,
                "SYSTEM_POWERONHOURS": 6041,
                "SYSTEM_UPTIME": "1d, 2h, 56m",
                "SYSTEM_FANSPEED": "3038 RPM",
                "SYSTEM_CPUTEMPERATURE": "55 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK348006EE",
                "SOFTWARE_KIOSKFRAME": 6041,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2.21312",
                "SSD_FREESPACE": "9 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI413500VW030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3867 MB",
                "RAM_USAGE": "2319 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 13,
                "ROW_CRT_DTM": "2016-05-31 05:02:21.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-31 05:02:21.0"
              },
              {
                "EQPMT_ID": 9901942,
                "EVNT_TMSTMP": "2016-06-13 13:01:46.0",
                "KFID": 201002,
                "COF": 9914053,
                "IDENT_ITEM_ID": 9381887,
                "DCC_BUSN_ENTTY_ID": 35504309,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #45094 (SERV.ONLY)",
                "LAT": 43.925513,
                "LNG": -78.696771,
                "ADDR1": "680 LONGWORTH AVE",
                "CITY": "BOWMANVILLE",
                "ZIP": "L1C 0M9",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 02: 21: 16 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK53700M9M",
                "EQPMT_UNDI_ID": 42319,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965303,
                "SYSTEM_POWERONHOURS": 3650,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3277 RPM",
                "SYSTEM_CPUTEMPERATURE": "62 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53700M9M",
                "SOFTWARE_KIOSKFRAME": 3650,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "15 GB",
                "SSD_TEMP": "44 C",
                "SSD_SERIALNUMBER": "CVLI4521011J030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3873 MB",
                "RAM_USAGE": "2084 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 6,
                "ROW_CRT_DTM": "2016-06-13 10:08:21.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:08:21.0"
              },
              {
                "EQPMT_ID": 9904109,
                "EVNT_TMSTMP": "2016-06-13 13:01:49.0",
                "KFID": 201190,
                "COF": 9754168,
                "IDENT_ITEM_ID": 9388396,
                "DCC_BUSN_ENTTY_ID": 35504414,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #14895 (SERV.ONLY)",
                "LAT": 44.0067,
                "LNG": -77.14296,
                "ADDR1": "166 MAIN ST BOX 20016",
                "CITY": "PICTON",
                "ZIP": "K0K 3V0",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 02: 39: 27 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK53500G68",
                "EQPMT_UNDI_ID": 42308,
                "BUILDING_SUB_LOCATION_DSC": "INSIDE1",
                "EQPMT_HLTH_RPRT_ID": 10966950,
                "SYSTEM_POWERONHOURS": 3602,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3304 RPM",
                "SYSTEM_CPUTEMPERATURE": "65 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53500G68",
                "SOFTWARE_KIOSKFRAME": 3602,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "15 GB",
                "SSD_TEMP": "43 C",
                "SSD_SERIALNUMBER": "CVLI5364009R030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3870 MB",
                "RAM_USAGE": "2114 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 6,
                "ROW_CRT_DTM": "2016-06-13 10:58:12.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:58:12.0"
              },
              {
                "EQPMT_ID": 11651395,
                "EVNT_TMSTMP": "2016-06-13 13:01:53.0",
                "KFID": 201918,
                "COF": 3506633,
                "IDENT_ITEM_ID": 9394005,
                "DCC_BUSN_ENTTY_ID": 35505588,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #63361 (SERV.ONLY)",
                "LAT": 45.47547,
                "LNG": -71.66606,
                "ADDR1": "150 RUE ANGUS S BUREAU 3",
                "CITY": "EAST ANGUS",
                "ZIP": "J0B 1R0",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 05: 53 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK5470013J",
                "EQPMT_UNDI_ID": 43081,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963370,
                "SYSTEM_POWERONHOURS": 3170,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3400 RPM",
                "SYSTEM_CPUTEMPERATURE": "62 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK5470013J",
                "SOFTWARE_KIOSKFRAME": 3170,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "47 C",
                "SSD_SERIALNUMBER": "CVLI550100JR030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3719 MB",
                "RAM_USAGE": "1799 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:04:03.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:04:03.0"
              },
              {
                "EQPMT_ID": 12848062,
                "EVNT_TMSTMP": "2016-06-13 13:01:51.0",
                "KFID": 203950,
                "COF": 3507381,
                "IDENT_ITEM_ID": 9402179,
                "DCC_BUSN_ENTTY_ID": 35507113,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #15547 (SERV.ONLY)",
                "LAT": 55.28091,
                "LNG": -114.77161,
                "ADDR1": "202 MAIN ST SW #106",
                "CITY": "SLAVE LAKE",
                "ZIP": "T0G 2A0",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Activation / Installation Issues",
                "LAST_BEAT": "06-13-2016 07: 24: 41 PM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK544007C5",
                "EQPMT_UNDI_ID": 43553,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10965028,
                "SYSTEM_POWERONHOURS": 2641,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3470 RPM",
                "SYSTEM_CPUTEMPERATURE": "58 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK544007C5",
                "SOFTWARE_KIOSKFRAME": 2641,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "41 C",
                "SSD_SERIALNUMBER": "CVLI53560095030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3903 MB",
                "RAM_USAGE": "2003 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 10,
                "ROW_CRT_DTM": "2016-06-13 10:07:32.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:32.0"
              },
              {
                "EQPMT_ID": 13077273,
                "EVNT_TMSTMP": "2016-06-13 13:01:51.0",
                "KFID": 201801,
                "COF": 9753918,
                "IDENT_ITEM_ID": 9403931,
                "DCC_BUSN_ENTTY_ID": 35506903,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #26285 (SERV.ONLY)",
                "LAT": 44.2290805,
                "LNG": -66.134061,
                "ADDR1": "8958 HIGHWAY 1",
                "CITY": "METEGHAN RIVER",
                "ZIP": "B0W 2L0",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 10: 59: 38 AM",
                "CUSTOMER_NAME": "1008 PBC PORTLAND OR",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK5440079T",
                "EQPMT_UNDI_ID": 42905,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10963799,
                "SYSTEM_POWERONHOURS": 2806,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3309 RPM",
                "SYSTEM_CPUTEMPERATURE": "55 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK5440079T",
                "SOFTWARE_KIOSKFRAME": 2806,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI53910088030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3877 MB",
                "RAM_USAGE": "2034 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 2,
                "ROW_CRT_DTM": "2016-06-13 10:06:52.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:52.0"
              },
              {
                "EQPMT_ID": 13078992,
                "EVNT_TMSTMP": "2016-06-13 13:01:47.0",
                "KFID": 203003,
                "COF": 3507352,
                "IDENT_ITEM_ID": 9374414,
                "DCC_BUSN_ENTTY_ID": 35506803,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #61309 (SERV.ONLY)",
                "LAT": 51.1563764,
                "LNG": -114.02806,
                "ADDR1": "200 11135 14TH ST NE UNIT A-102",
                "CITY": "CALGARY",
                "ZIP": "T3K 0Z7",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "06-14-2016 10: 59: 38 AM",
                "CUSTOMER_NAME": "1064 PBC ELKINS WV",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK547001BK",
                "EQPMT_UNDI_ID": 44506,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 10964871,
                "SYSTEM_POWERONHOURS": 2684,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3519 RPM",
                "SYSTEM_CPUTEMPERATURE": "63 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK547001BK",
                "SOFTWARE_KIOSKFRAME": 2684,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "45 C",
                "SSD_SERIALNUMBER": "CVLI539100F4030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3725 MB",
                "RAM_USAGE": "1759 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 3,
                "ROW_CRT_DTM": "2016-06-13 10:07:23.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:07:23.0"
              },
              {
                "EQPMT_ID": 15633778,
                "EVNT_TMSTMP": "2016-05-31 00:01:50.0",
                "KFID": 1100797,
                "COF": 3499865,
                "IDENT_ITEM_ID": 9302134,
                "DCC_BUSN_ENTTY_ID": 35510375,
                "DCC_BUSN_ENTTY_NM": "ARA@SUFFOLK COMMUNITY COL",
                "LAT": 0,
                "LNG": 0,
                "ADDR1": "533 COLLEGE RD",
                "CITY": "SELDEN",
                "ZIP": 11784,
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "06-14-2016 10: 59: 38 AM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PENN SOUTH MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK51300563",
                "EQPMT_UNDI_ID": 44164,
                "BUILDING_SUB_LOCATION_DSC": "unknown2",
                "EQPMT_HLTH_RPRT_ID": 10064944,
                "SYSTEM_POWERONHOURS": 6679,
                "SYSTEM_UPTIME": "0d, 19h, 1m",
                "SYSTEM_FANSPEED": "3384 RPM",
                "SYSTEM_CPUTEMPERATURE": "57 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK51300563",
                "SOFTWARE_KIOSKFRAME": 6679,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "7 GB",
                "SSD_TEMP": "40 C",
                "SSD_SERIALNUMBER": "CVLI45000120030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3723 MB",
                "RAM_USAGE": "2364 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 16,
                "ROW_CRT_DTM": "2016-05-30 21:03:07.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-30 21:03:07.0"
              },
              {
                "EQPMT_ID": 285334,
                "EVNT_TMSTMP": "2016-06-13 10:01:00.0",
                "KFID": 9901237,
                "COF": 3342248,
                "IDENT_ITEM_ID": 9030671,
                "DCC_BUSN_ENTTY_ID": 34950623,
                "DCC_BUSN_ENTTY_NM": "BUFFALO WILD WINGS 123",
                "LAT": 44.746258,
                "LNG": -93.376545,
                "ADDR1": "7551 EGAN DR",
                "CITY": "SAVAGE",
                "ZIP": 553782201,
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "MEM Remediation in progress for SEN Connectivity - Canada",
                "LAST_BEAT": "06-14-2016 10: 59: 38 AM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK302006EU",
                "EQPMT_UNDI_ID": 36086,
                "BUILDING_SUB_LOCATION_DSC": "CREW SERVE BY THE BAR",
                "EQPMT_HLTH_RPRT_ID": 10955832,
                "SYSTEM_POWERONHOURS": 16276,
                "SYSTEM_UPTIME": "0d, 5h, 0m",
                "SYSTEM_FANSPEED": "3067 RPM",
                "SYSTEM_CPUTEMPERATURE": "54 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK302006EU",
                "SOFTWARE_KIOSKFRAME": 16276,
                "SOFTWARE_PLUGINS": "1.1.121.427",
                "SOFTWARE_CREWMODE": "True",
                "VALVECONTROLLER_FIRMWARE": "1.6.2",
                "SSD_FREESPACE": "9 GB",
                "SSD_TEMP": "41 C",
                "SSD_SERIALNUMBER": "CVLI320004ZZ030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3987 MB",
                "RAM_USAGE": "2250 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 19,
                "ROW_CRT_DTM": "2016-06-13 07:07:24.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 07:07:24.0"
              },
              {
                "EQPMT_ID": 6164955,
                "EVNT_TMSTMP": "2016-05-04 13:01:50.0",
                "KFID": 1100859,
                "COF": 9760554,
                "IDENT_ITEM_ID": 9305497,
                "DCC_BUSN_ENTTY_ID": 35498456,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #24878 (SERV.ONLY)",
                "LAT": 52.136802,
                "LNG": -106.598997,
                "ADDR1": "1-821 CENTRAL AVE",
                "CITY": "SASKATOON",
                "ZIP": "S7N 2G7",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Not Connected",
                "OVERALL_STATUS": "Activation / Installation Issues",
                "LAST_BEAT": "06-14-2016 03: 05: 53 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "MOUNTAIN RGN",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK51400VRE",
                "EQPMT_UNDI_ID": 39808,
                "BUILDING_SUB_LOCATION_DSC": "inside1",
                "EQPMT_HLTH_RPRT_ID": 7769354,
                "SYSTEM_POWERONHOURS": 5033,
                "SYSTEM_UPTIME": "2d, 8h, 1m",
                "SYSTEM_FANSPEED": "3493 RPM",
                "SYSTEM_CPUTEMPERATURE": "56 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK51400VRE",
                "SOFTWARE_KIOSKFRAME": 5033,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "9 GB",
                "SSD_TEMP": "42 C",
                "SSD_SERIALNUMBER": "CVLI514000A6030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3843 MB",
                "RAM_USAGE": "2493 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 12,
                "ROW_CRT_DTM": "2016-05-04 13:03:33.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-04 13:03:33.0"
              },
              {
                "EQPMT_ID": 7107471,
                "EVNT_TMSTMP": "2016-06-13 13:01:52.0",
                "KFID": 1101425,
                "COF": 9914284,
                "IDENT_ITEM_ID": 9364121,
                "DCC_BUSN_ENTTY_ID": 35500309,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #51255 (SERV.ONLY)",
                "LAT": 42.41851,
                "LNG": -82.17449,
                "ADDR1": "455 GRAND AVE E UNIT 1",
                "CITY": "CHATHAM",
                "ZIP": "N7L 1X4",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 14: 42 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK53200FCB",
                "EQPMT_UNDI_ID": 41424,
                "BUILDING_SUB_LOCATION_DSC": "in2",
                "EQPMT_HLTH_RPRT_ID": 10963889,
                "SYSTEM_POWERONHOURS": 4799,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3258 RPM",
                "SYSTEM_CPUTEMPERATURE": "65 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK53200FCB",
                "SOFTWARE_KIOSKFRAME": 4799,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "43 C",
                "SSD_SERIALNUMBER": "CVLI5133006V030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3720 MB",
                "RAM_USAGE": "1860 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 13,
                "ROW_CRT_DTM": "2016-06-13 10:06:54.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:54.0"
              },
              {
                "EQPMT_ID": 12232415,
                "EVNT_TMSTMP": "2016-05-02 16:01:54.0",
                "KFID": 203238,
                "COF": 9760367,
                "IDENT_ITEM_ID": 9405265,
                "DCC_BUSN_ENTTY_ID": 35506193,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #05368 (SERV.ONLY)",
                "LAT": 46.33184,
                "LNG": -79.46415,
                "ADDR1": "180 SHIRREFF AVE",
                "CITY": "NORTH BAY",
                "ZIP": "P1B 7K9",
                "COUNTRY": "CANADA",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 09: 31 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK509006LT",
                "EQPMT_UNDI_ID": 43630,
                "BUILDING_SUB_LOCATION_DSC": "in1",
                "EQPMT_HLTH_RPRT_ID": 7626319,
                "SYSTEM_POWERONHOURS": 1805,
                "SYSTEM_UPTIME": "0d, 11h, 1m",
                "SYSTEM_FANSPEED": "3152 RPM",
                "SYSTEM_CPUTEMPERATURE": "53 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK509006LT",
                "SOFTWARE_KIOSKFRAME": 1805,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.6.2.21312",
                "SSD_FREESPACE": "14 GB",
                "SSD_TEMP": "39 C",
                "SSD_SERIALNUMBER": "CVLI444601RE030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3713 MB",
                "RAM_USAGE": "1873 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 4,
                "ROW_CRT_DTM": "2016-05-02 16:12:03.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-05-02 16:12:03.0"
              },
              {
                "EQPMT_ID": 13670329,
                "EVNT_TMSTMP": "2016-06-13 13:43:29.0",
                "KFID": 1100828,
                "COF": 9597295,
                "IDENT_ITEM_ID": 9310266,
                "DCC_BUSN_ENTTY_ID": 35507562,
                "DCC_BUSN_ENTTY_NM": "MAMA'S HAWAIIAN BBQ",
                "LAT": 32.235714,
                "LNG": -110.958145,
                "ADDR1": "850 E Speedway Blvd",
                "CITY": "Tucson",
                "ZIP": 85719,
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-13-2016 09: 14: 20 PM",
                "CUSTOMER_NAME": "1010 PBC ANCHORAGE AK",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK51400U90",
                "EQPMT_UNDI_ID": 43412,
                "BUILDING_SUB_LOCATION_DSC": "Front counter",
                "EQPMT_HLTH_RPRT_ID": 10966399,
                "SYSTEM_POWERONHOURS": 6386,
                "SYSTEM_UPTIME": "0d, 2h, 1m",
                "SYSTEM_FANSPEED": "3615 RPM",
                "SYSTEM_CPUTEMPERATURE": "61 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK51400U90",
                "SOFTWARE_KIOSKFRAME": 6386,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "5 GB",
                "SSD_TEMP": "46 C",
                "SSD_SERIALNUMBER": "CVLI44620024030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3884 MB",
                "RAM_USAGE": "2768 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 10,
                "ROW_CRT_DTM": "2016-06-13 10:45:17.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:45:17.0"
              },
              {
                "EQPMT_ID": 14626864,
                "EVNT_TMSTMP": "2016-06-13 13:01:50.0",
                "KFID": 203233,
                "COF": 3508120,
                "IDENT_ITEM_ID": 9415796,
                "DCC_BUSN_ENTTY_ID": 35509041,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #12531 (SERV.ONLY)",
                "LAT": 49.317931,
                "LNG": -124.297154,
                "ADDR1": "491C ISLAND HWY E",
                "CITY": "PARKSVILLE",
                "ZIP": "V9P 2H1",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 16: 32 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 206,
                "EQPMT_SRL_NUM_VAL": "GEGK55000GC2",
                "EQPMT_UNDI_ID": 44010,
                "BUILDING_SUB_LOCATION_DSC": "bar",
                "EQPMT_HLTH_RPRT_ID": 10963631,
                "SYSTEM_POWERONHOURS": 2291,
                "SYSTEM_UPTIME": "0d, 8h, 1m",
                "SYSTEM_FANSPEED": "3370 RPM",
                "SYSTEM_CPUTEMPERATURE": "58 C",
                "SYSTEM_CPUSERIALNUMBER": "GEGK55000GC2",
                "SOFTWARE_KIOSKFRAME": 2291,
                "SOFTWARE_PLUGINS": "1.1.1111.447",
                "SOFTWARE_CREWMODE": "False",
                "VALVECONTROLLER_FIRMWARE": "1.7.2.21312",
                "SSD_FREESPACE": "15 GB",
                "SSD_TEMP": "38 C",
                "SSD_SERIALNUMBER": "CVLI550100U8030H",
                "SSD_MODELNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "RAM_TOTAL": "3718 MB",
                "RAM_USAGE": "1754 MB",
                "SYSTEM_TEMP": "29 C",
                "SYSTEM_UNSAFESHUTDOWNCOUNT": 2,
                "ROW_CRT_DTM": "2016-06-13 10:06:44.0",
                "ROW_DEL_FLG": "N",
                "ROW_LAST_UPDT_DTM": "2016-06-13 10:06:44.0"
              },
              {
                "EQPMT_ID": 14671440,
                "EVNT_TMSTMP": "2016-06-13 13:01:51.0",
                "KFID": 201807,
                "COF": 9757770,
                "IDENT_ITEM_ID": 9395913,
                "DCC_BUSN_ENTTY_ID": 35509094,
                "DCC_BUSN_ENTTY_NM": "SUBWAY #41975 (SERV.ONLY)",
                "LAT": 43.65558,
                "LNG": -79.36459,
                "ADDR1": "344 QUEEN ST E",
                "CITY": "TORONTO",
                "ZIP": "M5A 1S8",
                "COUNTRY": "U.S.A",
                "CONNECTIVITY": "Transmitting Data",
                "OVERALL_STATUS": "Connected & Reporting",
                "LAST_BEAT": "06-14-2016 03: 16: 32 PM",
                "CUSTOMER_NAME": "1316 PBC UTICA NY",
                "REGION": "Georgia Mkt",
                "MARKET_UNIT": "PHILLY METRO MKT",
                "LOCATION": 123,
                "EQPMT_SRL_NUM_VAL": "GEGK537013QY",
                "EQPMT_UNDI_ID": "IN1",
                "BUILDING_SUB_LOCATION_DSC": 10964264,
                "EQPMT_HLTH_RPRT_ID": 3145,
                "SYSTEM_POWERONHOURS": "0d, 8h, 1m",
                "SYSTEM_UPTIME": "3240 RPM",
                "SYSTEM_FANSPEED": "59 C",
                "SYSTEM_CPUTEMPERATURE": "GEGK537013QY",
                "SYSTEM_CPUSERIALNUMBER": 3145,
                "SOFTWARE_KIOSKFRAME": "1.1.1111.447",
                "SOFTWARE_PLUGINS": "False",
                "SOFTWARE_CREWMODE": "1.7.2.21312",
                "VALVECONTROLLER_FIRMWARE": "14 GB",
                "SSD_FREESPACE": "42 C",
                "SSD_TEMP": "CVLI535600V5030H",
                "SSD_SERIALNUMBER": "ATA INTEL SSDMCEAC03 SCSI Disk Device",
                "SSD_MODELNUMBER": "3879 MB",
                "RAM_TOTAL": "2066 MB",
                "RAM_USAGE": "29 C",
                "SYSTEM_TEMP": 10,
                "SYSTEM_UNSAFESHUTDOWNCOUNT": "2016-06-13 10:07:03.0",
                "ROW_CRT_DTM": "N",
                "ROW_DEL_FLG": "2016-06-13 10:07:03.0",
                "ROW_LAST_UPDT_DTM": 0
              }
            ]
                      if(coords !== undefined){
                        coordinates = coords;
                        var map = new google.maps.Map(document.getElementById('map'), {
                              zoom: 4,
                              center: {
                                   "lat": coordinates[0].LAT,
                                   "lng": coordinates[0].LNG
                             }
                       });
                      }
                      else {
                            var map = new google.maps.Map(document.getElementById('map'), {
                                  zoom: 4,
                                  center: {
                                       "lat": 53.4480425,
                                       "lng": -101.3760773
                                 }
                           });

                      }
            
                    
            // 'http://www.myiconfinder.com/uploads/iconsets/32-32-a5485b563efc4511e0cd8bd04ad0fe9e.png';
            var image;
            
                    for (var i = 0; i < coordinates.length; i++) {
                        var contentString;
            if(coordinates[i].CONNECTIVITY=='Not Connected'){
            image='images/map-marker-red.png' ;
            contentString="<p>Connected, Faulty</p>";
 
            }
            else{
            image ='images/map-marker-green.png' ;
            contentString="<p>Connected, Healthy</p>";
 
            }
            
            
              
              console.log(contentString);
                       var infowindow = new google.maps.InfoWindow({
                       content: contentString
                      });
            
                      var marker = new google.maps.Marker({
                      position: {
                            "lat": coordinates[i].LAT,
                            "lng": coordinates[i].LNG
                      },
                      map: map,
                      icon: image,
                      details:{
                            "customerName":coordinates[i].CUSTOMER_NAME,
                            "customerAddress":coordinates[i].ADDR1
                      },
                      title: 'Demo',
                      animation: google.maps.Animation.DROP
                    });

                    // console.log(coordinates[i].lat,coordinates[i].lng);
                    google.maps.event.addListener(marker, 'click', (function() {
                      infowindow.open(map, this);
                      $('.geobox').show(700);
                      $('.geodetails').html("");
                      var table = 'Equipment Details <center> <table class="table tclass" ><tr><td>Customer Name</td><td>'+this.details.customerName+'</td></tr><tr><td>Customer Address</td><td>'+this.details.customerAddress+'</td></tr></table></center>';
                      $('.geodetails').html(table);
                    }))
                    }
            
   }

dataLoad.getAllData(function(data){
$scope.data=data;
});


$scope.gridOptions = {
enableRowSelection:true,
//selectionRowHeaderWidth: 40,
enableSorting: true,
enableFullRowSelection:true,
multiSelect:false,
expandableRowTemplate: 'expandableRowTemplate.html',
        //expandableRowHeight: 40,
// rowHeight:30,
columnDefs: [
    { name:'Country', field:'COUNTRY',width:80},
     { name:'Customer Name', field: 'CUSTOMER_NAME',width:200},
 { name:'Equip Sl.No', field: 'EQPMT_SRL_NUM_VAL',width:125 },

 { name:'Equip-id', field: 'EQPMT_ID',width:100 },
 { name:'Connectivity', field: 'CONNECTIVITY', enableCellEdit:false,width:150},//change
 { name:'Last Heartbeat', field:'LAST_BEAT',width:180},
 
 { name:'Market Unit', field:'MARKET_UNIT',width:300},
 { name:'Region', field:'REGION',width:300}
//  { name:'Status', field:'status'
//   ,cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"}
]};
$http.get("/js/dataone.json")
.then(function(response) {
$scope.initEquipmentMap(response.data);
var statimg;
     for(i = 0; i < response.data.length; i++){
statimg=response.data[i].CONNECTIVITY.split(' ')[0];
console.log(statimg);
 
response.data[i].subGridDtls=
[{'EQPMT_ID':response.data[i].EQPMT_ID,
    'EQPMT_SRL_NUM_VAL':response.data[i].EQPMT_SRL_NUM_VAL,
  'CUSTOMER_NAME':response.data[i].CUSTOMER_NAME,
  'CONNECTIVITY':response.data[i].CONNECTIVITY,
  'LAST_BEAT':response.data[i].LAST_BEAT,
  'COUNTRY':response.data[i].COUNTRY,
  'MARKET_UNIT':response.data[i].MARKET_UNIT,
  'REGION':response.data[i].REGION}
 ]
if(response.data[i].CONNECTIVITY=='Transmitting Data'){
response.data[i].checked=true;
response.data[i].subGridDtls[0].checked=true;
}
else{
 response.data[i].checked=false;
 response.data[i].subGridDtls[0].checked=false;
}
// ,'Connec':statimg
console.log("Subgrid detials follow");
console.log(response.data[i].subGridDtls);
response.data[i].subGridOptions = {
 rowHeight:70,
 columnDefs:[{ name:'Equip-id', field: 'EQPMT_ID',width:100,enablePinning:true,
 cellTemplate:'<div><div class="row"><div class="col-lg-0"></div><div class="col-lg-12 col-centered">{{row.entity.EQPMT_ID}}</div><div class="col-lg-0"></div></div><br><div class="row"><div class="col-lg-4"></div><div class="col-lg-4 col-centered"><img src="images/pepsi_spire_icon.png" /></div><div class="col-lg-4"></div></div></div>'},
 { name:'Equip Sl.No', field: 'EQPMT_SRL_NUM_VAL',width:125,
 cellTemplate:'<div><div class="row"><div class="col-lg-0"></div><div class="col-lg-12 col-centered">{{row.entity.EQPMT_SRL_NUM_VAL}}</div><div class="col-lg-0"></div></div><br></div>'},
 { name:'Customer Name', field: 'CUSTOMER_NAME',width:200},
 { name:'Connectivity', field: 'CONNECTIVITY', enableCellEdit:false,width:150,
 cellTemplate:'<div><div class="row"><div class="col-lg-0"></div><div class="col-lg-12 col-centered">{{row.entity.CONNECTIVITY}}</div><div class="col-lg-0"></div></div><br><div class="row"><div class="col-lg-4"></div><div class="col-lg-4 col-centered"><div ng-show=false><img  src="images/Transmitting.png" /></div></div><div class="col-lg-4"></div></div></div>'},//change
 { name:'Last Heartbeat', field:'LAST_BEAT',width:180,cellTemplate:'<div><div class="row"><div class="col-lg-0"></div><div class="col-lg-12 col-centered">{{row.entity.LAST_BEAT}}</div><div class="col-lg-0"></div></div><br><div class="row"><div class="col-lg-4"></div><div class="col-lg-4 col-centered"><div ng-show=true><img  src="images/Heartbeat.png" /></div></div><div class="col-lg-4"></div></div></div>'},
 { name:'Country', field:'COUNTRY',width:80,
 cellTemplate:'<div><div class="row"><div class="col-lg-0"></div><div class="col-lg-12 col-centered">{{row.entity.COUNTRY}}</div><div class="col-lg-0"></div></div><br><div class="row"><div class="col-lg-2"></div><div class="col-lg-8 col-centered"><img src="images/usa_map_icon.png" /></div><div class="col-lg-2"></div></div></div>'},
 { name:'Market Unit', field:'MARKET_UNIT',width:300},
 { name:'Region', field:'REGION',width:300},
 { name:'Connectivity', field:'photoP' ,cellTemplate:'<div><div class="row"><div class="col-lg-0"></div><div class="col-lg-12 col-centered">{{row.entity.CONNECTIVITY}}</div><div class="col-lg-0"></div></div><br><div class="row"><div class="col-lg-4"></div><div class="col-lg-4 col-centered"><img src="images/Transmitting.png" /></div><div class="col-lg-4"></div></div></div>'}/*,
  { name:'Connec', field:'Connec'}*/
//   '<div><form name="inputForm"><input type="number" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></form></div>' } ]
 
 ],
 data: response.data[i].subGridDtls
}
console.log('Modified data object is');
console.log(response.data);
 }
$scope.data = response.data;
$scope.masterData=response.data;
$timeout(function() {
if($scope.gridApi.selection.selectRow){
 $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
}
 });
console.log("Master data read from server");
$scope.gridOptions = {
enableRowSelection:true,
selectionRowHeaderWidth: 60,
enableSorting: true,
enableRowResizing:true,
// rowHeight:30,
columnDefs: [
 { name:'Equip-id', field: 'EQPMT_ID',width:100,enablePinning:true },
 { name:'Equip Sl.No', field: 'EQPMT_SRL_NUM_VAL',width:125 },
 { name:'Customer Name', field: 'CUSTOMER_NAME',width:200},
 { name:'Connectivity', field: 'CONNECTIVITY', enableCellEdit:false,width:150},//change
 { name:'Last Heartbeat', field:'LAST_BEAT',width:180},
 { name:'Country', field:'COUNTRY',width:80},
 { name:'Market Unit', field:'MARKET_UNIT',width:300},
 { name:'Region', field:'REGION',width:300}
//  { name:'Status', field:'status'
//   ,cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"}
]
 };
$scope.gridOptions.data=$scope.data;
});
   $scope.toggleMultiSelect = function() {
      $scope.gridApi.selection.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
    };
 
    $scope.toggleModifierKeysToMultiSelect = function() {
      $scope.gridApi.selection.setModifierKeysToMultiSelect(!$scope.gridApi.grid.options.modifierKeysToMultiSelect);
    };
 
    $scope.selectAll = function() {
      $scope.gridApi.selection.selectAllRows();
    };
 
    $scope.clearAll = function() {
      $scope.gridApi.selection.clearSelectedRows();
    };
 
    $scope.toggleRow1 = function() {
      $scope.gridApi.selection.toggleRowSelection($scope.gridOptions.data[0]);
    };
 
    $scope.toggleFullRowSelection = function() {
      $scope.gridOptions.enableFullRowSelection = !$scope.gridOptions.enableFullRowSelection;
      $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
    };
 
    $scope.setSelectable = function() {
      $scope.gridApi.selection.clearSelectedRows();
 
      /*$scope.gridOptions.isRowSelectable = function(row){
        if(row.entity.age > 30){
          return false;
        } else {
          return true;
        }
      };*/
      $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);
 
      $scope.gridOptions.data[0].age = 31;
      $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.EDIT);
    };
 
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope,function(row){
        var msg = 'row selected ' + row.isSelected;
console.log(row.entity);
equipmentDtlsService.setSelectedEquipment(row.entity);
        $log.log(msg);
      });
 
      gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
        var msg = 'rows changed ' + rows.length;
console.log(rows);
        $log.log(msg);
 
$location.path('equipmentDetails');
      });
$scope.gridRowClick = row => {
      console.log(row);
      // or maybe $location.path(row.url)?
    };

    };
//$scope.gridOptions.rowTemplate= '/views/grid-row.view.html';
    

$scope.enableFilter=function(data){
var filData=$scope.data;
//$scope.gridOptions.data.splice(25,20);
if(data!=='NONE'){
for(var i = filData.length-1; i--;){
if (filData[i].COUNTRY=== data) filData.splice(i, 1);
}
$scope.data=filData;
console.log($scope.data.length);
//$scope.gridOptions.data=filData;
// for(var j=0;j<filData.length;j++)
// console.log(filData[j].COUNTRY);
//console.log($scope.inc);
//
console.log($scope.data);
}
else
{
console.log("Master data : initial length -> "+$scope.masterData.length);
$scope.data=$scope.masterData;
console.log($scope.data.length);
console.log("Master data : Post operation length ->"+$scope.masterData.length);
/* $scope.inc=true;
console.log("Reset in progress");
$scope.data=$scope.masterData;
console.log("Master data");
console.log($scope.masterData);
console.log("Scope data");
 
console.log($scope.data);
for(var j=0;j<$scope.data.length;j++)
console.log($scope.data.COUNTRY);*/
}
}
var self = this;
           self.simulateQuery = false;
           self.isDisabled    = false;
           // list of states to be displayed
           //self.states        = loadStates();
  self.regions=loadRegions();
 
  
          /* self.querySearch   = querySearch;
           self.selectedItemChange = selectedItemChange;
           self.searchTextChange   = searchTextChange;
           self.newState = newState;
           function newState(state) {
              alert("This functionality is yet to be implemented!");
           }    
           function querySearch (query) {
              var results = query ? self.states.filter( createFilterFor(query) ) : self.states, deferred;
              if (self.simulateQuery) {
                 deferred = $q.defer();
                 $timeout(function () { 
                       deferred.resolve( results ); 
                    }, 
           Math.random() * 1000, false);
                 return deferred.promise;
              } else {
                 return results;
              }
           }
           function searchTextChange(text) {
              console.log('Text changed to ' + text);
           }
           function selectedItemChange(item) {
              console.log('Item changed to ' + JSON.stringify(item));
           }
           //build list of states as map of key-value pairs
           function loadStates() {
              var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                 Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                 Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                 Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                 North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                 South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                 Wisconsin, Wyoming';
              return allStates.split(/, +/g).map( function (state) {
                 return {
                    value: state.toLowerCase(),
                    display: state
                 };
              });
           }
           //filter function for search query
           function createFilterFor(query) {
              var lowercaseQuery = angular.lowercase(query);
              return function filterFn(state) {
                 return (state.value.indexOf(lowercaseQuery) === 0);
              };
  }*/
/*REGION FILTER STARTS HERE*/
self.regionSearch=regionSearch;
self.selectedRegionChange=selectedRegionChange;
self.searchRegionChange=searchRegionChange;

function loadRegions() {
 var allRegions = 'CALIFORNIA RGN,Georgia Mkt,MOUNTAIN RGN,MIDWEST RGN,NORTHEAST RGN';
 return allRegions.split(",").map( function (region) {
return {
value: region.toLowerCase(),
display: region
};
 });
  }
  function regionSearch (query) {
 var results = query ? self.regions.filter( createRegionFilterFor(query) ) : self.regions, deferred;
 if (self.simulateQuery) {
deferred = $q.defer();
$timeout(function () { 
  deferred.resolve( results ); 
}, 
Math.random() * 1000, false);
return deferred.promise;
 } else {
return results;
 }
  }
  function searchRegionChange(text) {
 console.log('Region changed to ' + text);
  }
  function selectedRegionChange(item) {
 console.log('Region selection changed to ' + JSON.stringify(item));
  console.log($scope.data);
  var filData=$scope.data;

if(item!=='NONE'){
/*
for(var i = filData.length-1; i--;){
if (filData[i].REGION=== item.display) filData.splice(i, 1);
}*/
//console.log(filData.filter(filterRegion));
var result=new Array(filData.filter(filterRegion.bind(null,item.display)));
console.log('Result array is');
console.log(result);
console.log('Grid data is');
console.log($scope.data);
var resArray=result[0];
//$scope.data=resArray;
console.log('Grid transformed is');
console.log($scope.data);
$scope.gridOptions.data=resArray;
//  $scope.$apply();
// for(var i = filData.length-1; i--;){
// if (filData[i].REGION=== item.display) filData.splice(i, 1);
// }
  }
  }
function filterRegion(filterValue,element,index,array){
console.log('Element region -> '+element.REGION);
return (element.REGION==filterValue);
console.log()
}
//filter function for search query
  function createRegionFilterFor(query) {
 var lowercaseQuery = angular.lowercase(query);
 return function filterFn(region) {
return (region.value.indexOf(lowercaseQuery) === 0);
 };
}

/*REGION FILTER STARTS HERE*/
/*MARKET UNIT FILTER STARTS HERE*/
self.munits=loadMunits();
self.munitSearch=munitSearch;
self.selectedMunitChange=selectedMunitChange;
self.searchMunitChange=searchMunitChange;

function loadMunits() {
 var allMunits = 'N NEW ENGLAND MKT,NEW JERSEY MKT,UPSTATE E NY MKT,PENN SOUTH MKT,PHILLY METRO MKT';
 return allMunits.split(",").map( function (munit) {
return {
value: munit.toLowerCase(),
display: munit
};
 });
  }
  function munitSearch (query) {
 var results = query ? self.munits.filter( createMunitFilterFor(query) ) : self.munits, deferred;
 if (self.simulateQuery) {
deferred = $q.defer();
$timeout(function () { 
  deferred.resolve( results ); 
}, 
Math.random() * 1000, false);
return deferred.promise;
 } else {
return results;
 }
  }
  function searchMunitChange(text) {
 console.log('munit changed to ' + text);
  }
  function selectedMunitChange(item) {
 console.log('munit selection changed to ' + JSON.stringify(item));
   var filData=$scope.data;

if(item!=='NONE'){
var result=new Array(filData.filter(filterMunit.bind(null,item.display)));
var resArray=result[0];
$scope.gridOptions.data=resArray;
  }
 
  }
function filterMunit(filterValue,element,index,array){
console.log('Element MARKET unit -> '+element.MARKET_UNIT);
return (element.MARKET_UNIT==filterValue);
console.log()
}
//filter function for search query
  function createMunitFilterFor(query) {
 var lowercaseQuery = angular.lowercase(query);
 return function filterFn(munit) {
return (munit.value.indexOf(lowercaseQuery) === 0);
 };
}

/*MARKET UNIT FILTER STARTS HERE*/
/*LOCATION FILTER STARTS HERE*/
self.locations=loadLocations();
self.locationSearch=locationSearch;
self.selectedLocationChange=selectedLocationChange;
self.searchLocationChange=searchLocationChange;

function loadLocations() {
 var allLocations = '206,116,1123,123';
 return allLocations.split(",").map( function (location) {
return {
value: location.toLowerCase(),
display: location
};
 });
  }
  function locationSearch (query) {
 var results = query ? self.locations.filter( createLocationFilterFor(query) ) : self.locations, deferred;
 if (self.simulateQuery) {
deferred = $q.defer();
$timeout(function () { 
  deferred.resolve( results ); 
}, 
Math.random() * 1000, false);
return deferred.promise;
 } else {
return results;
 }
  }
  function searchLocationChange(text) {
 console.log('Location changed to ' + text);
  }
  function selectedLocationChange(item) {
 console.log('Location selection changed to ' + JSON.stringify(item));
   var filData=$scope.data;
  
if(item!=='NONE'){
var result=new Array(filData.filter(filterLocation.bind(null,item.display)));
var resArray=result[0];
$scope.gridOptions.data=resArray;
  }
  }
function filterLocation(filterValue,element,index,array){
console.log('Element Location -> '+element.LOCATION);
return (element.LOCATION==filterValue);
console.log()
}
//filter function for search query
  function createLocationFilterFor(query) {
 var lowercaseQuery = angular.lowercase(query);
 return function filterFn(location) {
return (location.value.indexOf(lowercaseQuery) === 0);
 };
}

/*LOCATION FILTER ENDS HERE*/
/*COF FILTER STARTS HERE*/
self.cofs=loadCofs();
self.cofSearch=cofSearch;
self.selectedCofChange=selectedCofChange;
self.searchCofChange=searchCofChange;

function loadCofs() {
 var allCofs = '8196683,9760128, 3508158,9760372, 8730892,9913640, 9760851,9763263, 9753982,9760271, 8272037,9760380, 8741969,8624740, 8619675,9851316, 7136539,3506625, 8272153,8120803, 8120150,3511404, 3342313,3490974, 8117109,9831230, 9298567,9754211, 9760433,9760434, 9760121,8700161, 8610469,8623226, 9429105,9914053, 9754168,3506633, 3507381,9753918, 3507352,3499865, 3342248,9760554, 9914284,9760367, 9597295,3508120, 9757770';
 return allCofs.split(",").map( function (cof) {
return {
value: cof.toLowerCase(),
display: cof
};
 });
  }
 function cofSearch (query) {
 var results = query ? self.cofs.filter( createCofFilterFor(query) ) : self.cofs, deferred;
 if (self.simulateQuery) {
deferred = $q.defer();
$timeout(function () { 
  deferred.resolve( results ); 
}, 
Math.random() * 1000, false);
return deferred.promise;
 } else {
return results;
 }
  }
  function searchCofChange(text) {
 console.log('Cof changed to ' + text);
  }
  function selectedCofChange(item) {
 console.log('Cof selection changed to ' + JSON.stringify(item));
  }
//filter function for search query
  function createCofFilterFor(query) {
 var lowercaseQuery = angular.lowercase(query);
 return function filterFn(cof) {
return (cof.value.indexOf(lowercaseQuery) === 0);
 };
}

/*COF FILTER STARTS HERE*/
/*CUSTOMER FILTER STARTS HERE*/
 
self.customers=loadCustomers();
self.customerSearch=customerSearch;
self.selectedCustomerChange=selectedCustomerChange;
self.searchCustomerChange=searchCustomerChange;

function loadCustomers() {
var allCustomers = '1008 PBC PORTLAND OR,1012 PBC FAIRBANKS AK,1315 PBC SYRACUSE NY,1047 PBC WILLIAMSPORT PA,1064 PBC ELKINS WV,1316 PBC UTICA NY,1010 PBC ANCHORAGE AK';
return allCustomers.split(",").map( function (customer) {
return {
value: customer.toLowerCase(),
display: customer
};
});
 }
 function customerSearch (query) {
var results = query ? self.customers.filter( createCustomerFilterFor(query) ) : self.customers, deferred;
if (self.simulateQuery) {
deferred = $q.defer();
$timeout(function () { 
 deferred.resolve( results ); 
}, 
Math.random() * 1000, false);
return deferred.promise;
} else {
return results;
}
 }
 function searchCustomerChange(text) {
console.log('Customer changed to ' + text);
 }
 function selectedCustomerChange(item) {
console.log('Customer selection changed to ' + JSON.stringify(item));
 console.log($scope.data);
 var filData=$scope.data;

if(item!=='NONE'){
/*
for(var i = filData.length-1; i--;){
if (filData[i].REGION=== item.display) filData.splice(i, 1);
}*/
//console.log(filData.filter(filterRegion));
var result=new Array(filData.filter(filterCustomer.bind(null,item.display)));
console.log('Result array is');
console.log(result);
console.log('Grid data is');
console.log($scope.data);
var resArray=result[0];
//$scope.data=resArray;
console.log('Grid transformed is');
console.log($scope.data);
$scope.gridOptions.data=resArray;
//  $scope.$apply();
// for(var i = filData.length-1; i--;){
// if (filData[i].REGION=== item.display) filData.splice(i, 1);
// }
 }
 }
function filterCustomer(filterValue,element,index,array){
console.log('Element region -> '+element.CUSTOMER);
return (element.CUSTOMER==filterValue);
console.log()
}
//filter function for search query
 function createCustomerFilterFor(query) {
var lowercaseQuery = angular.lowercase(query);
return function filterFn(customer) {
return (customer.value.indexOf(lowercaseQuery) === 0);
};
 }
 /*CUSTOMER FILTER ENDS HERE*/
}]);
