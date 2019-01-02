/* 
동아대학교 전공학점 평균을 계산해주는 스크립트입니다.
<동아대학교 학점 평균 계산 방법> 
 : https://intra.donga.ac.kr/SubPage/sub_4_1.aspx
 */

var 총학점수 = 0;
var 교과목별평점X학점수_합계 = 0;
 
function get교과목별평점(grade){
    if(grade=='A+') return 4.5;
    else if(grade=='A') return 4.0;
    else if(grade=='B+') return 3.5;
    else if(grade=='B') return 3.0;
    else if(grade=='C+') return 2.5;
    else if(grade=='C') return 2.0;
    else if(grade=='D+') return 1.5;
    else if(grade=='D') return 1.0;
    else if(grade=='F') return 0.0;
}
 
var table = document.getElementById("dgList1");
var returnVal = confirm("전공학점만 계산하시겠습니까?");
 
if(returnVal){
    for(var i=1 ; i<table.rows.length ;i++)
    {
        if(table.rows[i].cells[4].innerHTML.indexOf("전공")!=-1
		&& table.rows[i].cells[6].innerHTML != 'P')
	{
            var 교과목별평점 = get교과목별평점(table.rows[i].cells[6].innerHTML);
            var 학점수 = Number(table.rows[i].cells[5].innerHTML);
            
            교과목별평점X학점수_합계 += 교과목별평점 * 학점수;
            총학점수 += 학점수;
        }
    }
    alert("<전공 학점 평균>\n "+교과목별평점X학점수_합계/총학점수+"\n\n전공 총학점수 : "+총학점수);
}
else{
    for(var i=1 ; i<table.rows.length ; i++)
    {
        if(table.rows[i].cells[6].innerHTML != 'P')
	{
            var 교과목별평점 = get교과목별평점(table.rows[i].cells[6].innerHTML);
            var 학점수 = Number(table.rows[i].cells[5].innerHTML);
            
            교과목별평점X학점수_합계 += 교과목별평점 * 학점수;
            총학점수 += 학점수;
        }
    }
    alert("<전체 학점 평균>\n "+교과목별평점X학점수_합계/총학점수+"\n\n전공 총학점수 : "+총학점수);
}
