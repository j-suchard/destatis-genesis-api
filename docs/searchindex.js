Search.setIndex({docnames:["genesis_api_wrapper","genesis_api_wrapper.enums","genesis_api_wrapper.exceptions","genesis_api_wrapper.models","genesis_api_wrapper.responses","genesis_api_wrapper.responses.internals","genesis_api_wrapper.tools","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["genesis_api_wrapper.rst","genesis_api_wrapper.enums.rst","genesis_api_wrapper.exceptions.rst","genesis_api_wrapper.models.rst","genesis_api_wrapper.responses.rst","genesis_api_wrapper.responses.internals.rst","genesis_api_wrapper.tools.rst","index.rst","modules.rst"],objects:{"":[[0,0,0,"-","genesis_api_wrapper"]],"genesis_api_wrapper.AsyncGENESISWrapper":[[0,1,1,"","Catalogue"],[0,1,1,"","Data"],[0,1,1,"","Find"],[0,1,1,"","HelloWorld"],[0,3,1,"","catalogue"],[0,3,1,"","data"],[0,3,1,"","find"],[0,3,1,"","hello_world"]],"genesis_api_wrapper.AsyncGENESISWrapper.Catalogue":[[0,2,1,"","cubes"],[0,2,1,"","cubes2statistic"],[0,2,1,"","cubes2variable"],[0,2,1,"","jobs"],[0,2,1,"","modified_data"],[0,2,1,"","quality_signs"],[0,2,1,"","results"],[0,2,1,"","statistics"],[0,2,1,"","statistics2variable"],[0,2,1,"","tables"],[0,2,1,"","tables2statistics"],[0,2,1,"","tables2variable"],[0,2,1,"","terms"],[0,2,1,"","timeseries"],[0,2,1,"","timeseries2statistic"],[0,2,1,"","timeseries2variable"],[0,2,1,"","values"],[0,2,1,"","values2variable"],[0,2,1,"","variables"],[0,2,1,"","variables2statistic"]],"genesis_api_wrapper.AsyncGENESISWrapper.Data":[[0,2,1,"","chart2result"],[0,2,1,"","chart2table"],[0,2,1,"","chart2timeseries"],[0,2,1,"","cube"],[0,2,1,"","cube_file"]],"genesis_api_wrapper.AsyncGENESISWrapper.Find":[[0,2,1,"","find"]],"genesis_api_wrapper.AsyncGENESISWrapper.HelloWorld":[[0,2,1,"","login_check"],[0,2,1,"","who_am_i"]],"genesis_api_wrapper.enums":[[1,1,1,"","GENESISArea"],[1,1,1,"","GENESISCategory"],[1,1,1,"","GENESISChartType"],[1,1,1,"","GENESISImageSize"],[1,1,1,"","GENESISJobCriteria"],[1,1,1,"","GENESISJobType"],[1,1,1,"","GENESISLanguage"],[1,1,1,"","GENESISObjectType"],[1,1,1,"","GENESISStatisticCriteria"],[1,1,1,"","GENESISTableCriteria"],[1,1,1,"","GENESISValueCriteria"],[1,1,1,"","GENESISVariableCriteria"],[1,1,1,"","GENESISVariableType"]],"genesis_api_wrapper.enums.GENESISArea":[[1,3,1,"","ALL"],[1,3,1,"","GROUP"],[1,3,1,"","OFFICE"],[1,3,1,"","PUBLIC"],[1,3,1,"","USER"]],"genesis_api_wrapper.enums.GENESISCategory":[[1,3,1,"","ALL"],[1,3,1,"","DATA_CUBES"],[1,3,1,"","STATISTICS"],[1,3,1,"","TABLES"],[1,3,1,"","TIME_SERIES"],[1,3,1,"","VARIABLES"]],"genesis_api_wrapper.enums.GENESISChartType":[[1,3,1,"","BAR_CHART"],[1,3,1,"","LINE_CHART"],[1,3,1,"","PIE_CHART"],[1,3,1,"","POINT_CLOUD"]],"genesis_api_wrapper.enums.GENESISImageSize":[[1,3,1,"","LEVEL_0"],[1,3,1,"","LEVEL_1"],[1,3,1,"","LEVEL_2"],[1,3,1,"","LEVEL_3"]],"genesis_api_wrapper.enums.GENESISJobCriteria":[[1,3,1,"","CODE"],[1,3,1,"","STATUS"],[1,3,1,"","TIME"],[1,3,1,"","TYPE"]],"genesis_api_wrapper.enums.GENESISJobType":[[1,3,1,"","ALL"],[1,3,1,"","CALCULATE_SUM_CUBES"],[1,3,1,"","CLEANUP_DATA_CUBES"],[1,3,1,"","EXPORT"],[1,3,1,"","IMPORT"],[1,3,1,"","VALUE_RETRIEVAL"]],"genesis_api_wrapper.enums.GENESISLanguage":[[1,3,1,"","ENGLISH"],[1,3,1,"","GERMAN"]],"genesis_api_wrapper.enums.GENESISObjectType":[[1,3,1,"","ALL"],[1,3,1,"","STATISTIC"],[1,3,1,"","STATISTIC_UPDATE"],[1,3,1,"","TABLE"]],"genesis_api_wrapper.enums.GENESISStatisticCriteria":[[1,3,1,"","CODE"],[1,3,1,"","CONTENT"]],"genesis_api_wrapper.enums.GENESISTableCriteria":[[1,3,1,"","CODE"],[1,3,1,"","TOP"]],"genesis_api_wrapper.enums.GENESISValueCriteria":[[1,3,1,"","CODE"],[1,3,1,"","CONTENT"]],"genesis_api_wrapper.enums.GENESISVariableCriteria":[[1,3,1,"","CODE"],[1,3,1,"","CONTENT"]],"genesis_api_wrapper.enums.GENESISVariableType":[[1,3,1,"","ALL"],[1,3,1,"","CLASSIFYING"],[1,3,1,"","FACTUAL"],[1,3,1,"","SPATIAL"],[1,3,1,"","TEMPORAL"],[1,3,1,"","TIME_IDENTIFYING"],[1,3,1,"","TOTAL"],[1,3,1,"","VALUE"]],"genesis_api_wrapper.exceptions":[[2,4,1,"","GENESISInternalServerError"],[2,4,1,"","GENESISPermissionError"]],"genesis_api_wrapper.models":[[3,1,1,"","BaseModel"],[3,1,1,"","CubeInformation"],[3,1,1,"","JobInformation"],[3,1,1,"","ModifiedDataInformation"],[3,1,1,"","ObjectInformation"],[3,1,1,"","QualitySignInformation"],[3,1,1,"","ResultTableInformation"],[3,1,1,"","StatisticInformation"],[3,1,1,"","TableInformation"],[3,1,1,"","TermInformation"],[3,1,1,"","TimeSeriesInformation"],[3,1,1,"","ValueInformation"],[3,1,1,"","VariableInformation"]],"genesis_api_wrapper.models.BaseModel":[[3,1,1,"","Config"]],"genesis_api_wrapper.models.BaseModel.Config":[[3,3,1,"","allow_population_by_field_name"]],"genesis_api_wrapper.models.CubeInformation":[[3,2,1,"","convert_string_to_unix_timestamp"],[3,3,1,"","extra_information"],[3,3,1,"","last_update"],[3,3,1,"","state"],[3,3,1,"","time_span"]],"genesis_api_wrapper.models.JobInformation":[[3,2,1,"","convert_date_string_to_date"],[3,2,1,"","convert_time_string_to_time"],[3,3,1,"","job_date"],[3,3,1,"","job_time"],[3,3,1,"","state"]],"genesis_api_wrapper.models.ModifiedDataInformation":[[3,3,1,"","added"],[3,3,1,"","change_date"],[3,2,1,"","convert_date_string_to_date"],[3,3,1,"","type"]],"genesis_api_wrapper.models.ObjectInformation":[[3,3,1,"","description"],[3,3,1,"","identification"]],"genesis_api_wrapper.models.QualitySignInformation":[[3,3,1,"","description"],[3,3,1,"","identification"]],"genesis_api_wrapper.models.ResultTableInformation":[[3,3,1,"","values"]],"genesis_api_wrapper.models.StatisticInformation":[[3,3,1,"","cubes"],[3,3,1,"","extra_information"]],"genesis_api_wrapper.models.TableInformation":[[3,3,1,"","time"]],"genesis_api_wrapper.models.TermInformation":[[3,3,1,"","term"]],"genesis_api_wrapper.models.TimeSeriesInformation":[[3,2,1,"","convert_string_to_unix_timestamp"],[3,3,1,"","extra_information"],[3,3,1,"","last_update"],[3,3,1,"","state"],[3,3,1,"","time_range"]],"genesis_api_wrapper.models.ValueInformation":[[3,3,1,"","extra_information"],[3,3,1,"","variables"]],"genesis_api_wrapper.models.VariableInformation":[[3,3,1,"","extra_information"],[3,3,1,"","type"],[3,3,1,"","values"]],"genesis_api_wrapper.responses":[[4,1,1,"","BaseResponse"],[4,1,1,"","Catalogue"],[4,1,1,"","Find"],[4,1,1,"","HelloWorld"],[5,0,0,"-","internals"]],"genesis_api_wrapper.responses.BaseResponse":[[4,3,1,"","copyright_notice"],[4,3,1,"","request_parameter"],[4,3,1,"","request_status"],[4,3,1,"","service_identification"]],"genesis_api_wrapper.responses.Catalogue":[[4,1,1,"","CubeResponse"],[4,1,1,"","JobResponse"],[4,1,1,"","ModifiedDataResponse"],[4,1,1,"","QualitySignsResponse"],[4,1,1,"","ResultTableResponse"],[4,1,1,"","StatisticsResponse"],[4,1,1,"","TableResponse"],[4,1,1,"","TermResponse"],[4,1,1,"","TimeseriesResponse"],[4,1,1,"","ValueResponse"],[4,1,1,"","VariableResponse"]],"genesis_api_wrapper.responses.Catalogue.CubeResponse":[[4,3,1,"","cube_list"]],"genesis_api_wrapper.responses.Catalogue.JobResponse":[[4,3,1,"","job_list"]],"genesis_api_wrapper.responses.Catalogue.ModifiedDataResponse":[[4,3,1,"","changed_objects"],[4,2,1,"","remove_none_values_from_list"]],"genesis_api_wrapper.responses.Catalogue.QualitySignsResponse":[[4,3,1,"","quality_signs"]],"genesis_api_wrapper.responses.Catalogue.ResultTableResponse":[[4,3,1,"","result_tables"]],"genesis_api_wrapper.responses.Catalogue.StatisticsResponse":[[4,3,1,"","statistics"]],"genesis_api_wrapper.responses.Catalogue.TableResponse":[[4,3,1,"","statistics"]],"genesis_api_wrapper.responses.Catalogue.TermResponse":[[4,3,1,"","terms"]],"genesis_api_wrapper.responses.Catalogue.TimeseriesResponse":[[4,3,1,"","time_series"]],"genesis_api_wrapper.responses.Catalogue.ValueResponse":[[4,3,1,"","time_series"]],"genesis_api_wrapper.responses.Catalogue.VariableResponse":[[4,3,1,"","variables"]],"genesis_api_wrapper.responses.Find":[[4,1,1,"","FindResult"]],"genesis_api_wrapper.responses.Find.FindResult":[[4,3,1,"","data_cubes"],[4,3,1,"","statistics"],[4,3,1,"","tables"],[4,3,1,"","time_series"],[4,3,1,"","variables"]],"genesis_api_wrapper.responses.HelloWorld":[[4,1,1,"","LoginCheckResponse"],[4,1,1,"","WhoAmIResponse"]],"genesis_api_wrapper.responses.HelloWorld.LoginCheckResponse":[[4,3,1,"","status"],[4,3,1,"","username"]],"genesis_api_wrapper.responses.HelloWorld.WhoAmIResponse":[[4,3,1,"","user_agent"],[4,3,1,"","user_ip"]],"genesis_api_wrapper.responses.internals":[[5,1,1,"","RequestParameter"],[5,1,1,"","ServiceIdent"],[5,1,1,"","Status"]],"genesis_api_wrapper.responses.internals.RequestParameter":[[5,1,1,"","Config"],[5,3,1,"","language"]],"genesis_api_wrapper.responses.internals.RequestParameter.Config":[[5,3,1,"","extra"]],"genesis_api_wrapper.responses.internals.ServiceIdent":[[5,3,1,"","method"],[5,3,1,"","service"]],"genesis_api_wrapper.responses.internals.Status":[[5,3,1,"","code"],[5,3,1,"","content"],[5,3,1,"","type"]],"genesis_api_wrapper.tools":[[6,6,1,"","download_file_from_database"],[6,6,1,"","get_parsed_response"],[6,6,1,"","get_raw_json_response"],[6,6,1,"","is_host_available"]],genesis_api_wrapper:[[0,1,1,"","AsyncGENESISWrapper"],[1,0,0,"-","enums"],[2,0,0,"-","exceptions"],[0,5,1,"","logger"],[3,0,0,"-","models"],[4,0,0,"-","responses"],[6,0,0,"-","tools"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","data","Python data"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:data","6":"py:function"},terms:{"0":[0,1,5],"1":[0,1,3],"100":0,"1024x768":[0,1],"15":0,"2":1,"2nd":5,"3":1,"4":0,"480x320":1,"5":0,"50":0,"6":0,"640x480":1,"7":0,"800x600":1,"\u00f6ffentlich":1,"boolean":[3,6],"class":[0,1,3,4,5],"default":0,"enum":[0,5,8],"export":1,"function":7,"import":[1,7],"int":[0,3,5,6],"public":1,"r\u00e4umlich":1,"return":[0,3,4,6],"static":0,"true":[0,3],"try":6,A:[0,1,3,4,5,6],BEING:0,IN:0,IS:0,If:[5,6,7],THE:0,TO:0,The:[0,1,3,4,5,6,7],To:7,_genericalia:6,_loop:7,_wrapper:7,abl:7,about:[0,3,4,5,7],access:[0,2,7],accord:0,account:[0,2,7],accumul:0,activ:4,ad:3,addit:[0,5],additional_metadata:0,address:[0,6],after:[0,4,7],ag:0,agent:[0,7],alias:3,all:[0,1,3,5,7],allow:[0,3,5],allow_population_by_field_nam:3,alwai:4,amount:0,amt:1,an:[0,1,2,3,5,6,7],ani:[0,5],api:[0,1,3,4,6],appli:0,applic:7,ar:[0,1,3,4,5,6,7],area:0,assign:[0,3,5],associ:3,async:[0,6],asyncgenesiswrapp:[0,7],asynchron:[0,7],asyncio:7,auftragstyp:1,avail:[1,3,5,7],await:7,axi:0,bar_chart:1,base:[0,1,2,3,4,5],basemodel:[3,4,5],baserespons:4,basic:[3,4],been:[0,3],benutz:1,berechnen:1,bereinigen:1,big:4,bodi:0,bool:[0,3,6],calculate_sum_cub:1,call:[4,5,7],call_result:7,card:0,catalogu:[0,4,6,7],categori:[0,1],chang:[0,3,4],change_d:3,changed_object:4,charact:0,characterist:0,chart2result:0,chart2tabl:0,chart2timeseri:0,chart:[0,1],chart_typ:0,check:[0,6,7],classif:0,classifi:[0,1],classifying_code_1:0,classifying_code_2:0,classifying_code_3:0,classifying_key_1:0,classifying_key_2:0,classifying_key_3:0,classmethod:[3,4],cleanup_data_cub:1,client:0,code:[0,1,3,5],collect:6,combin:0,compon:0,compress:0,compress_y_axi:0,config:[3,5],configur:[3,5],constrainedstrvalu:[0,3],contain:[0,1,4,5,6],content:8,convert:3,convert_date_string_to_d:3,convert_string_to_unix_timestamp:3,convert_time_string_to_tim:3,copyright:4,copyright_notic:4,creat:0,creation:0,criteria:[0,1],csv:0,cube:[0,1,3,4,7],cube_cod:0,cube_fil:0,cube_list:4,cubeinform:[3,4],cuberespons:[0,4,6],cubes2statist:0,cubes2vari:0,current:[4,7],dai:0,data:[0,3,4,7],data_cub:[1,4],databas:[0,1,3,4,5,6],datacub:0,dataset:[0,3],date:[0,3],datenquad:1,datetim:[0,3],de:1,depend:3,descript:[3,5,7],destati:[0,7],dict:[0,6],dictionari:0,differ:1,directori:0,displai:[0,3],document:[0,3,5],doe:6,download:[0,6,7],download_file_from_databas:6,download_image_from_databas:[],draw_points_in_line_chart:0,due:[0,3],durat:6,dure:[0,1],e:4,embed:0,emtpi:3,en:1,end_year:0,english:1,entri:4,enumer:1,erfolgreich:5,error:[0,2,5,7],event:7,everi:[3,4,5],exampl:7,except:[0,8],exclud:0,execut:[0,7],extens:6,extra:[0,3,5],extra_data:5,extra_inform:3,factual:1,failur:0,fals:0,feder:7,field:[0,3,5],file:[0,6],filter:0,find:[0,4,6,7],findresult:[0,4,6],first:[0,7],fit:0,five:0,follow:7,found:[0,3,4],four:0,from:[0,3,4,5,6,7],further:[0,3],g:4,gener:3,genesi:[0,1,3,4,5,6],genesis_api_wrapp:7,genesisarea:[0,1],genesiscategori:[0,1],genesischarttyp:[0,1],genesisimages:[0,1],genesisinternalservererror:2,genesisjobcriteria:[0,1],genesisjobtyp:[0,1],genesislanguag:[0,1,5],genesisobjecttyp:[0,1],genesispermissionerror:2,genesisstatisticcriteria:[0,1],genesistablecriteria:[0,1],genesisvaluecriteria:[0,1],genesisvariablecriteria:[0,1],genesisvariabletyp:[0,1],german:[0,1],germani:7,get:[0,4,7],get_event_loop:7,get_parsed_respons:6,get_raw_json_respons:6,graph:0,group:[0,1],grupp:1,ha:[0,3,6],have:[0,5],hello:[0,7],hello_world:[0,7],helloworld:[0,4,6],here:7,highlight:0,hold:4,host:[6,7],hostnam:6,how:0,ident:4,identif:[0,3,5],identifi:[0,3],ignor:0,imag:[0,1,6],image_s:0,implement:7,includ:3,index:7,indic:[3,4,6],inform:[0,3,4,5],inhalt:1,inherit:3,input:3,insgesamt:1,instanc:7,instanti:7,instead:0,intenum:1,intern:[0,2,4],ip:[0,6],is_host_avail:6,item:0,its:7,job:[0,1,3,4],job_dat:3,job_list:4,job_tim:3,job_typ:0,jobinform:[3,4],jobrespons:[0,4,6],json:[0,6],kei:0,klassifizierend:1,languag:[0,1,5],last:3,last_upd:3,latestupd:3,length:0,level3:0,level:[1,5],level_0:1,level_1:1,level_2:1,level_3:[0,1],librari:7,licens:4,limit:0,line:0,line_chart:[0,1],list:[0,4,7],local:0,locat:[0,1],logger:0,login:0,login_check:[0,7],logincheck:4,logincheckrespons:[0,4,6],loop:7,lower:5,made:4,mai:[0,2,3,5],main:[1,3],maintain:7,match:[0,4],max:[0,6],maximum:0,mean:7,messag:5,metadata:[0,7],method:[0,2,4,5,6,7],miss:3,model:[0,4,5,8],modifi:[0,3],modified_data:0,modifieddatainform:[3,4],modifieddatarespons:[0,4,6],modul:[7,8],moment:3,multipl:6,municip:0,name:[0,3,5,7],need:[0,6,7],none:[0,3,4],note:7,notic:4,number:[0,3],object:[0,1,3,4,5,7],object_area:0,object_loc:0,object_nam:0,object_typ:0,objectinform:3,occur:[2,5],offer:7,offic:[1,7],offici:0,one:0,onli:[0,7],option:[0,3,4,6],os:[0,6],other:[0,3],own:7,packag:8,page:7,param:[],paramet:[0,3,4,5,6],pars:[0,6],parseabl:6,part:[0,5],password:[0,7],path:[0,6],pathlik:[0,6],per:0,period:3,pie:0,pie_chart:[0,1],pixel:[0,1],point:[0,3],point_cloud:1,popul:3,port:6,premium:[0,7],present:[3,5],preset:3,process:5,profil:7,project:6,properti:7,pull:0,pydant:3,pydanticmodel:6,python:7,qualiti:[0,3,4],quality_sign:[0,4],qualitysigninform:[3,4],qualitysignsrespons:[0,4,6],queri:6,query_paramet:6,query_path:6,r:6,rais:2,rang:3,reachabl:6,receiv:[0,4],recommend:1,refer:5,referenc:0,region:0,region_cod:0,region_kei:0,registr:7,relat:0,remov:4,remove_none_values_from_list:4,repres:5,reqeust:0,request:[0,4,5,6],request_paramet:4,request_statu:4,requestparamet:[4,5],requir:0,resolut:1,resourc:[3,4,6],respect:7,respons:[0,3,6,8],rest:7,result:[0,3,4,7],result_count:0,result_t:4,results_per_categori:0,resulttableinform:[3,4],resulttablerespons:[0,4,6],retriev:0,rtype:[],run_until_complet:7,sachlich:1,save:0,search:[0,1,5,7],search_area:0,search_bi:0,search_term:0,secretstr:[],section:0,select:0,selector:0,sent:4,seper:0,seri:[3,4],server:[0,2,4],servic:[2,4,5,7],service_identif:4,serviceid:[4,5],set:[3,5,6],shall:[0,3,6],should:0,show:0,show_top_values_first:0,sign:[0,3,4],singl:0,size:[0,1],slice:0,some:[3,7],sort:[0,1],sort_bi:0,span:3,spatial:1,specifi:[0,2,6],star:0,start:0,start_year:0,state:3,statist:[0,1,3,4,7],statistic_nam:0,statistic_selector:0,statistic_upd:1,statisticinform:[3,4],statistics2vari:0,statistics_nam:0,statisticsrespons:[0,4,6],statistiken:1,statistikupd:1,statu:[1,4,5,6],storag:0,store:[0,7],str:[0,1,3,4,5,6],string:3,subpackag:8,success:0,successfulli:7,summenquad:1,suppli:0,support:1,synchron:7,tabellen:1,tabl:[0,1,3,4],table_selector:0,tableinform:[3,4],tablerespons:[0,4,6],tables2statist:0,tables2vari:0,taken:0,tempor:1,temporari:0,term:[0,3,4],term_selector:0,terminform:[3,4],termrespons:[4,6],test:7,textual:[3,5],them:0,thi:[0,3,5,6,7],those:7,time:[0,1,3,4,6],time_identifi:1,time_rang:3,time_seri:[1,4],time_slic:0,time_span:3,timeout:6,timeseri:[0,3,4,7],timeseries2statist:0,timeseries2vari:0,timeseries_selector:0,timeseriesinform:[3,4],timeseriesrespons:[0,4,6],timestamp:3,tool:[0,8],top:[0,1],total:1,transmit:0,type:[0,1,3,5,6],under:7,union:[0,6],unix:3,updat:[0,3],updated_aft:0,us:[0,1,3,5,6,7],user:[0,1,7],user_ag:4,user_ip:4,usernam:[0,4,7],v:3,valid:[6,7],valu:[0,1,3,4],value_filt:0,value_retriev:1,valueinform:[3,4],valuerespons:[0,4,6],values2vari:0,variabl:[0,1,3,4,7],variable_filt:0,variable_nam:0,variable_typ:0,variableinform:[3,4],variablerespons:[0,4,6],variables2statist:0,wai:7,warn:0,week:0,were:0,wert:1,werteabruf:1,what:3,when:0,where:4,which:[0,1,3,4,5,6,7],who:4,who_am_i:0,whoami:4,whoamirespons:[0,4,6],whole:0,wild:0,wildcard:0,work:7,world:[0,7],wrapper:0,written:6,y:0,year:0,you:[0,7],your:7,zeitidentifizierend:1,zeitlich:1,zeitpunkt:1,zero:5},titles:["genesis_api_wrapper package","genesis_api_wrapper.enums package","genesis_api_wrapper.exceptions package","genesis_api_wrapper.models package","genesis_api_wrapper.responses package","genesis_api_wrapper.responses.internals package","genesis_api_wrapper.tools package","GENESIS database API wrapper","genesis_api_wrapper"],titleterms:{"enum":1,"new":7,api:7,content:[0,1,2,3,4,5,6],creat:7,credenti:7,databas:7,document:[],except:2,gener:7,genesi:7,genesis_api_wrapp:[0,1,2,3,4,5,6,8],indic:7,intern:5,model:3,modul:[0,1,2,3,4,5,6],packag:[0,1,2,3,4,5,6],respons:[4,5],rest:[],s:[],subpackag:[0,4],tabl:7,tool:6,usag:7,welcom:[],wrapper:7}})