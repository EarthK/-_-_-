/*
동아대학교 전공학점 평균을 계산해주는 스크립트입니다.

<동아대학교 학점 평균 계산 방법>
 : https://intra.donga.ac.kr/SubPage/sub_4_1.aspx 

2019.01.02 작성
 */


var 총학점수 = 0;
var 교과목별평점X학점수_합계 = 0;
var 학점수 = 0;

function get평점(grade){
	if(grade=='A+') return 4.5;
	else if(grade=='A') return 4.0;
	else if(grade=='B+') return 3.5;
	else if(grade=='B') return 3.0;
	else if(grade=='C+') return 2.5;
	else if(grade=='C') return 2.0;
	else if(grade=='D+') return 1.5;
	else if(grade=='D') return 1.0;
	else if(grade=='F') return 0;
}

var table = document.getElementById("dgList1");

for(var i=0 ; i<table.rows.length ;i++){
	if(table.rows[i].cells[4].innerHTML.indexOf("전공")!=-1){
		교과목별평점X학점수_합계 += get평점(table.rows[i].cells[6].innerHTML) * Number(table.rows[i].cells[5].innerHTML)
		총학점수 += Number(table.rows[i].cells[5].innerHTML);
    }
}

console.log(교과목별평점X학점수_합계/총학점수);
