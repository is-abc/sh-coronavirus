var addressStatX = ["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"];
var addressStatY = [1089,71,97,227,588,197,179,1083,54,119,80,513,288,97,156,74];
var ageStatX = [-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95];
var ageStatY = [1,26,17,19,14,42,28,22,32,39,33,48,33,40,48,29,25,32,57,71,42,68,55,72,65,77,66,68,67,88,96,110,105,107,102,94,76,95,105,99,95,69,101,91,97,80,87,78,104,106,113,119,90,98,79,86,83,74,63,76,50,38,44,37,54,49,55,56,45,43,38,33,21,32,21,20,18,16,16,9,15,12,10,10,13,7,9,8,5,9,5,4,1,4,2,1];
var sexStat = [{"name":"女","value":2342},{"name":"男","value":2570}];
var typeStat = [{"name":"无症状","value":4678},{"name":"确诊","value":234}];
var dateStatX = ["2022-03-06","2022-03-07","2022-03-08","2022-03-09","2022-03-10","2022-03-11","2022-03-12","2022-03-13","2022-03-14","2022-03-15","2022-03-16","2022-03-17","2022-03-18","2022-03-19","2022-03-20","2022-03-21","2022-03-22"];
var dateStatY = [48,55,65,80,74,82,64,169,138,201,158,260,374,509,758,896,981];
var dateAddressY = [36,43,45,65,64,67,50,149,91,157,123,163,259,298,314,414,480];
var dateDiagnoseStatY = [3,4,3,4,10,5,1,41,9,5,8,57,8,17,24,31,4];
var dateAsymptomaticStatY = [45,51,62,76,64,77,63,128,129,196,150,203,366,492,734,865,977];
var dateMap = {"2022-03-09":{"typeStat":[{"name":"无症状","value":76},{"name":"确诊","value":4}],"addressStatY":[25,1,2,16,9,4,9,1,4,6,1,1,1],"addressStatX":["闵行区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","徐汇区","黄浦区","普陀区","奉贤区"],"ageStatX":[8,9,11,13,14,15,23,24,25,26,27,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,50,51,52,53,55,56,57,59,60,61,70,79,80,85],"sexStat":[{"name":"女","value":43},{"name":"男","value":37}],"ageStatY":[2,2,1,1,1,2,1,1,1,2,4,2,3,4,2,4,6,1,2,1,2,4,1,1,1,2,1,2,2,3,2,3,2,1,1,1,1,1,1,1,1,1,1,1],"dateStatY":[80],"dateStatX":["2022-03-09"],"dateAddressY":[65],"dateDiagnoseStatY":[4],"dateAsymptomaticStatY":[76]},"2022-03-17":{"typeStat":[{"name":"无症状","value":203},{"name":"确诊","value":57}],"addressStatY":[82,1,1,14,35,10,4,35,2,7,1,36,20,3,7,2],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,4,6,8,9,10,11,12,13,14,15,16,17,19,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,70,72,73,74,76,77,78,80,82,87],"sexStat":[{"name":"女","value":98},{"name":"男","value":162}],"ageStatY":[3,1,1,1,1,2,5,6,7,5,1,1,3,3,3,5,4,2,4,2,5,2,6,3,1,5,4,4,4,8,3,9,8,4,5,5,5,5,2,5,5,5,9,6,8,9,2,6,6,2,3,5,4,3,4,3,2,2,1,2,4,2,4,3,2,1,1,1,1,1],"dateStatY":[260],"dateStatX":["2022-03-17"],"dateAddressY":[163],"dateDiagnoseStatY":[57],"dateAsymptomaticStatY":[203]},"2022-03-06":{"typeStat":[{"name":"无症状","value":45},{"name":"确诊","value":3}],"addressStatY":[7,6,13,4,6,1,1,5,3,2],"addressStatX":["闵行区","宝山区","嘉定区","徐汇区","松江区","黄浦区","静安区","普陀区","浦东新区","奉贤区"],"ageStatX":[-3,5,17,18,19,21,22,25,26,27,31,33,36,37,39,40,42,43,44,45,46,48,49,50,51,54,55,60,65,67,83],"sexStat":[{"name":"女","value":15},{"name":"男","value":33}],"ageStatY":[1,1,1,1,1,1,1,2,1,1,2,1,3,3,1,2,2,2,1,2,2,3,1,4,1,1,2,1,1,1,1],"dateStatY":[48],"dateStatX":["2022-03-06"],"dateAddressY":[36],"dateDiagnoseStatY":[3],"dateAsymptomaticStatY":[45]},"2022-03-16":{"typeStat":[{"name":"无症状","value":150},{"name":"确诊","value":8}],"addressStatY":[18,1,4,10,41,4,3,44,2,10,7,9,3,2],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","徐汇区","黄浦区","普陀区","奉贤区"],"ageStatX":[3,5,6,8,11,12,13,14,15,18,19,20,23,24,25,27,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,60,61,67,68,69,70,71,72,75,78,80,84,89,90],"sexStat":[{"name":"女","value":76},{"name":"男","value":82}],"ageStatY":[1,1,1,1,5,1,2,2,1,1,2,2,5,1,4,1,2,3,1,5,1,2,6,3,6,5,4,7,3,4,2,2,4,3,4,2,2,7,5,2,7,4,3,3,2,2,3,2,1,2,1,1,2,2,1,2,1,1,1,1],"dateStatY":[158],"dateStatX":["2022-03-16"],"dateAddressY":[123],"dateDiagnoseStatY":[8],"dateAsymptomaticStatY":[150]},"2022-03-08":{"typeStat":[{"name":"无症状","value":62},{"name":"确诊","value":3}],"addressStatY":[12,3,1,11,9,8,14,2,2,3],"addressStatX":["闵行区","青浦区","长宁区","宝山区","徐汇区","嘉定区","松江区","静安区","普陀区","浦东新区"],"ageStatX":[4,9,11,17,18,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,44,45,46,48,49,50,52,54,55,56,58,63,66,71,72],"sexStat":[{"name":"女","value":24},{"name":"男","value":41}],"ageStatY":[1,1,1,1,1,1,1,2,1,2,1,1,1,3,2,1,1,2,4,1,2,2,2,1,2,3,1,1,1,1,3,3,2,1,2,1,3,1,1,1,1,1],"dateStatY":[65],"dateStatX":["2022-03-08"],"dateAddressY":[45],"dateDiagnoseStatY":[3],"dateAsymptomaticStatY":[62]},"2022-03-19":{"typeStat":[{"name":"无症状","value":492},{"name":"确诊","value":17}],"addressStatY":[53,5,12,17,81,16,15,135,14,7,3,61,36,23,25,6],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,3,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,80,82,84,85,87,88,89],"sexStat":[{"name":"女","value":248},{"name":"男","value":261}],"ageStatY":[4,3,5,1,5,3,3,3,3,1,9,3,1,2,5,2,4,6,6,7,10,10,11,10,10,8,6,9,13,11,13,7,7,10,4,6,8,9,17,8,6,8,12,7,11,13,14,11,9,10,7,9,15,7,12,9,5,7,4,3,5,6,8,3,5,4,7,4,3,3,1,5,3,2,2,1,1,1,1,1,1],"dateStatY":[509],"dateStatX":["2022-03-19"],"dateAddressY":[298],"dateDiagnoseStatY":[17],"dateAsymptomaticStatY":[492]},"2022-03-07":{"typeStat":[{"name":"无症状","value":51},{"name":"确诊","value":4}],"addressStatY":[13,1,1,6,12,13,4,1,4],"addressStatX":["闵行区","虹口区","金山区","宝山区","嘉定区","徐汇区","松江区","普陀区","浦东新区"],"ageStatX":[15,17,20,21,23,24,26,27,28,29,30,32,33,34,35,36,38,39,42,43,46,47,48,49,50,51,52,53,55,56,57,58,59],"sexStat":[{"name":"女","value":19},{"name":"男","value":36}],"ageStatY":[1,1,1,1,2,1,4,2,1,2,3,4,1,2,1,2,2,1,1,1,3,1,1,2,1,2,3,2,1,1,2,1,1],"dateStatY":[55],"dateStatX":["2022-03-07"],"dateAddressY":[43],"dateDiagnoseStatY":[4],"dateAsymptomaticStatY":[51]},"2022-03-18":{"typeStat":[{"name":"无症状","value":366},{"name":"确诊","value":8}],"addressStatY":[59,16,7,27,44,13,12,67,8,19,17,40,15,23,7],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","普陀区","奉贤区"],"ageStatX":[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,74,76,77,80,82,84,86,87],"sexStat":[{"name":"女","value":191},{"name":"男","value":183}],"ageStatY":[4,3,2,1,3,3,3,7,2,1,3,7,9,4,2,2,6,12,3,7,4,5,3,3,5,5,6,12,6,5,9,12,5,5,2,11,8,7,9,1,8,2,5,4,3,10,9,9,3,5,9,5,4,7,10,3,4,9,6,2,4,5,4,4,8,2,3,4,4,2,3,1,1,2,1,1,1],"dateStatY":[374],"dateStatX":["2022-03-18"],"dateAddressY":[259],"dateDiagnoseStatY":[8],"dateAsymptomaticStatY":[366]},"2022-03-13":{"typeStat":[{"name":"无症状","value":128},{"name":"确诊","value":41}],"addressStatY":[29,4,4,3,19,8,10,39,3,5,7,18,12,6,2],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","普陀区","奉贤区"],"ageStatX":[2,3,4,5,6,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,43,44,45,46,48,49,50,51,52,53,55,56,57,58,59,62,63,64,65,66,67,68,69,71,72,73,78,82,87],"sexStat":[{"name":"女","value":78},{"name":"男","value":91}],"ageStatY":[1,1,1,1,1,1,4,3,3,1,1,4,1,4,6,2,2,1,4,2,3,4,1,2,3,5,7,4,4,3,2,3,4,5,6,3,2,3,3,2,5,4,1,6,3,4,2,1,2,1,1,2,1,2,2,1,1,1,3,3,3,2,1,2,1,1],"dateStatY":[169],"dateStatX":["2022-03-13"],"dateAddressY":[149],"dateDiagnoseStatY":[41],"dateAsymptomaticStatY":[128]},"2022-03-12":{"typeStat":[{"name":"无症状","value":63},{"name":"确诊","value":1}],"addressStatY":[11,2,4,3,3,1,1,2,3,34],"addressStatX":["闵行区","长宁区","金山区","宝山区","嘉定区","徐汇区","松江区","静安区","黄浦区","浦东新区"],"ageStatX":[4,5,6,8,10,11,13,18,19,21,26,28,30,31,32,33,34,35,36,38,39,41,43,44,46,47,51,52,53,54,57,58,59,60,63,66,73,74,79,80],"sexStat":[{"name":"女","value":37},{"name":"男","value":27}],"ageStatY":[1,8,4,1,2,2,1,1,2,1,1,1,2,3,1,1,2,2,2,2,1,2,1,1,1,1,1,1,3,2,1,1,1,1,1,1,1,1,1,1],"dateStatY":[64],"dateStatX":["2022-03-12"],"dateAddressY":[50],"dateDiagnoseStatY":[1],"dateAsymptomaticStatY":[63]},"2022-03-15":{"typeStat":[{"name":"无症状","value":196},{"name":"确诊","value":5}],"addressStatY":[31,6,4,11,21,10,10,42,2,6,8,24,12,9,5],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","普陀区","奉贤区"],"ageStatX":[1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,74,75,83,87,89,91,95],"sexStat":[{"name":"女","value":99},{"name":"男","value":102}],"ageStatY":[1,1,2,2,5,1,1,2,2,5,4,1,5,1,3,5,3,5,3,2,3,1,2,3,1,6,5,2,5,2,4,3,6,3,2,2,3,5,4,2,1,3,2,2,1,5,3,2,3,2,3,5,5,5,3,6,4,1,1,1,3,3,2,3,1,2,1,2,1,1,1,2,1,1,1],"dateStatY":[201],"dateStatX":["2022-03-15"],"dateAddressY":[157],"dateDiagnoseStatY":[5],"dateAsymptomaticStatY":[196]},"2022-03-14":{"typeStat":[{"name":"无症状","value":129},{"name":"确诊","value":9}],"addressStatY":[26,1,2,23,10,6,23,1,4,4,12,23,3],"addressStatX":["闵行区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","奉贤区"],"ageStatX":[2,3,8,9,11,13,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,64,66,67,68,69,70,74,84,89],"sexStat":[{"name":"女","value":67},{"name":"男","value":71}],"ageStatY":[1,1,3,1,2,1,2,3,1,3,5,1,2,2,6,4,2,1,3,2,2,1,1,5,1,3,2,2,4,3,1,2,1,2,3,2,3,2,2,5,5,1,3,2,4,3,1,2,1,3,2,2,2,2,1,2,4,2,1,1,1],"dateStatY":[138],"dateStatX":["2022-03-14"],"dateAddressY":[91],"dateDiagnoseStatY":[9],"dateAsymptomaticStatY":[129]},"近3天":{"typeStat":[{"name":"无症状","value":2576},{"name":"确诊","value":59}],"addressStatY":[692,29,58,96,254,79,104,626,21,48,31,263,150,71,70,43],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"sexStat":[{"name":"女","value":1259},{"name":"男","value":1376}],"ageStatY":[14,10,9,7,19,11,16,15,15,15,20,16,10,18,15,10,15,28,33,24,39,35,35,37,39,31,38,30,42,54,59,61,52,52,53,37,49,64,49,44,37,57,55,63,47,49,42,54,59,58,68,47,54,51,44,31,44,31,36,21,19,28,20,34,30,30,42,28,22,22,17,10,23,12,12,10,11,11,7,8,12,5,8,9,5,8,2,4,5,3,3,1,4,2],"dateStatY":[758,896,981],"dateStatX":["2022-03-20","2022-03-21","2022-03-22"],"dateAddressY":[314,414,480],"dateDiagnoseStatY":[24,31,4],"dateAsymptomaticStatY":[734,865,977]},"2022-03-20":{"typeStat":[{"name":"无症状","value":734},{"name":"确诊","value":24}],"addressStatY":[265,4,13,13,40,9,32,220,8,12,11,46,42,12,18,13],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,88,89,91,93,94],"sexStat":[{"name":"女","value":341},{"name":"男","value":417}],"ageStatY":[4,3,1,2,7,3,4,5,5,4,5,5,4,8,4,5,5,11,18,7,11,6,12,13,12,12,4,10,17,10,15,14,14,17,21,9,11,20,10,16,7,15,13,13,13,10,13,15,10,21,18,13,11,17,11,12,16,9,14,6,5,5,6,9,5,9,14,14,7,9,4,4,9,4,6,5,3,3,2,2,1,2,1,1,1,1,1,2,1,1],"dateStatY":[758],"dateStatX":["2022-03-20"],"dateAddressY":[314],"dateDiagnoseStatY":[24],"dateAsymptomaticStatY":[734]},"2022-03-11":{"typeStat":[{"name":"无症状","value":77},{"name":"确诊","value":5}],"addressStatY":[17,1,1,9,12,5,4,9,2,4,12,5,1],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","虹口区","金山区","徐汇区","黄浦区","奉贤区"],"ageStatX":[2,3,5,6,9,10,12,14,15,17,18,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39,40,41,43,44,46,49,50,51,54,55,56,57,58,59,63,64,69,77],"sexStat":[{"name":"女","value":46},{"name":"男","value":36}],"ageStatY":[1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,3,2,3,1,2,3,1,2,2,4,2,1,6,1,1,1,1,3,1,2,3,4,4,2,1,1,1,1],"dateStatY":[82],"dateStatX":["2022-03-11"],"dateAddressY":[67],"dateDiagnoseStatY":[5],"dateAsymptomaticStatY":[77]},"2022-03-22":{"typeStat":[{"name":"无症状","value":977},{"name":"确诊","value":4}],"addressStatY":[305,20,19,16,111,31,28,237,3,13,4,87,59,19,21,8],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"sexStat":[{"name":"女","value":493},{"name":"男","value":488}],"ageStatY":[2,2,6,2,6,4,2,6,4,4,5,6,3,6,3,5,15,10,7,16,11,11,11,17,8,19,6,11,18,28,26,23,24,14,17,18,26,21,13,17,24,19,28,18,25,12,19,26,26,25,15,22,19,19,10,22,12,13,7,6,13,8,11,14,13,14,6,6,3,6,4,6,4,2,3,4,4,5,3,6,3,3,3,3,3,2,1,2,2,1,1,1,1],"dateStatY":[981],"dateStatX":["2022-03-22"],"dateAddressY":[480],"dateDiagnoseStatY":[4],"dateAsymptomaticStatY":[977]},"2022-03-21":{"typeStat":[{"name":"无症状","value":865},{"name":"确诊","value":31}],"addressStatY":[122,5,26,67,103,39,44,169,10,23,16,130,49,40,31,22],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,88,89,90,93],"sexStat":[{"name":"女","value":425},{"name":"男","value":471}],"ageStatY":[8,5,2,3,6,4,10,4,6,7,10,5,3,10,5,2,5,2,5,10,12,18,12,13,10,11,15,14,14,26,16,21,15,11,18,11,20,18,18,15,13,18,23,22,16,14,17,20,23,11,25,19,21,15,14,9,6,10,9,8,8,10,6,14,11,8,14,8,9,10,7,2,8,4,4,2,4,4,2,3,4,1,3,5,1,4,2,2,1,2],"dateStatY":[896],"dateStatX":["2022-03-21"],"dateAddressY":[414],"dateDiagnoseStatY":[31],"dateAsymptomaticStatY":[865]},"2022-03-10":{"typeStat":[{"name":"无症状","value":64},{"name":"确诊","value":10}],"addressStatY":[14,6,5,1,10,7,6,8,1,2,4,10],"addressStatX":["闵行区","虹口区","青浦区","长宁区","宝山区","徐汇区","嘉定区","松江区","黄浦区","静安区","普陀区","浦东新区"],"ageStatX":[5,8,9,10,16,18,19,21,24,25,26,27,28,29,30,31,32,33,37,38,39,40,41,43,44,45,46,47,48,49,50,51,57,59,60,61,64,65,66,68,69,72,75,90],"sexStat":[{"name":"女","value":42},{"name":"男","value":32}],"ageStatY":[1,1,2,3,1,1,2,2,1,1,1,1,1,1,2,3,4,5,2,3,1,1,1,1,1,4,1,2,3,2,1,4,1,1,1,1,1,2,1,1,2,1,1,1],"dateStatY":[74],"dateStatX":["2022-03-10"],"dateAddressY":[64],"dateDiagnoseStatY":[10],"dateAsymptomaticStatY":[64]},"近7天":{"typeStat":[{"name":"无症状","value":3787},{"name":"确诊","value":149}],"addressStatY":[904,52,82,164,455,122,138,907,47,91,52,407,230,97,128,60],"addressStatX":["闵行区","青浦区","长宁区","宝山区","嘉定区","松江区","静安区","浦东新区","杨浦区","虹口区","金山区","徐汇区","黄浦区","崇明区","普陀区","奉贤区"],"ageStatX":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"sexStat":[{"name":"女","value":1872},{"name":"男","value":2064}],"ageStatY":[25,13,15,9,28,17,21,23,26,22,34,27,35,37,21,14,22,40,52,33,55,45,57,55,58,51,56,53,67,73,81,85,82,80,72,56,78,84,75,76,54,91,72,81,68,69,68,81,88,91,95,75,85,68,69,65,58,50,61,39,33,40,31,45,42,47,50,38,31,34,27,17,30,18,18,18,15,14,7,13,12,9,8,12,6,9,5,5,7,4,3,1,4,2],"dateStatY":[158,260,374,509,758,896,981],"dateStatX":["2022-03-16","2022-03-17","2022-03-18","2022-03-19","2022-03-20","2022-03-21","2022-03-22"],"dateAddressY":[123,163,259,298,314,414,480],"dateDiagnoseStatY":[8,57,8,17,24,31,4],"dateAsymptomaticStatY":[150,203,366,492,734,865,977]}};