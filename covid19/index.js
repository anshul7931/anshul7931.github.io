$(document).ready(function(){
    $.ajax({
        url:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",
        dataType:"text",
        success:function(data){
            var results = JSON.parse(csvJSON(data));
            var table_data = '<table class="table table-bordered table-striped">';

            table_data += `
                    <tr>
                        <th scope="col">Province</th>
                        <th scope="col">Country</th>
                        <th scope="col">Total cases</th>
                        <th scope="col">Cases reported today</th>
                    </tr>
            `

            for(i=0;i<Object.keys(results).length;i++){
                var pro = results[i]["Province/State"] == undefined ? results[i]["Country/Region"] : results[i]["Province/State"];
                var objLength = Number(Object.keys(results[i]).length);
                var lastKey = Object.keys(results[i])[objLength-1];
                var secondlastKey = Object.keys(results[i])[objLength-2];
                //console.log(objLength);
                table_data += `<tr>
                    <td>${pro}</td>
                    <td>${results[i]["Country/Region"]}</td>
                    <td>${results[i][lastKey]}</td>
                    <td>${results[i][lastKey] - results[i][secondlastKey]}</td>
                </tr>`
            }
            // console.log(results[0]);

             table_data += '</table>';

           
            $('#coronaTable').html(table_data);
        }

    });
});

function csvJSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var doubleQuote = lines[i].split('"');
        var currentline;
        if(doubleQuote.length>1){
            obj[headers[0]]=doubleQuote[1];
            currentline=doubleQuote[2].split(",");
        }else{
          currentline=lines[i].split(",");
        }
        for(var j=0;j<headers.length;j++){
            if(!obj && obj[headers[j]].split(',').length < 1)
             obj[headers[j]] = currentline[j];
        }
        for(var j=1;j<headers.length;j++){
             obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return JSON.stringify(result); 
  }