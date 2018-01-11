// JavaScript Document
var quiz=[  /*array of object, each object for each question*/
	{
		"ques" : "1. Which of the following page replacement algorithms suffers from Belady’s anomaly?",
		"ans" : ["FIFO","LRU","Optimal Page Replacement","Both LRU and FIFO"],  /* array of options*/
		"correct" : "FIFO" ,
		"expl" : "Belady’s anomaly proves that it is possible to have more page faults when increasing the 			number of page frames while using the First in First Out (FIFO) page replacement algorithm.",
	},
	{
		"ques" : "2. We are given a set of n distinct elements and an unlabeled binary tree with n nodes. In how many ways can we populate the tree with the given set so that it becomes a binary search tree?",
		"ans" : ["0","1","n!","(1/(n+1)).2nCn"],  /* array of options*/
		"correct" : "1" ,
		"expl" : "There is only one way. The minimum value has to go to the leftmost node and the maximum value to the rightmost node. Recursively, we can define for other nodes.",
	},
	{
		"ques" : "3. Which of the following is TRUE?",
		"ans" : ["Every relation in 3NF is also in BCNF","A relation R is in 3NF if every non-prime attribute of R is fully functionally dependent on every key of R","Every relation in BCNF is also in 3NF","No relation can be in both BCNF and 3NF"],  /* array of options*/
		"correct" : "Every relation in BCNF is also in 3NF" ,
		"expl" : "BCNF is a stronger version 3NF. So every relation in BCNF will also be in 3NF.",
	},
	{
		"ques" : "4. A RAM chip has a capacity of 1024 words of 8 bits each (1K × 8). The number of 2 × 4 decoders with enable line needed to construct a 16K × 16 RAM from 1K × 8 RAM is",
		"ans" : ["4","5","6","7"],  /* array of options*/
		"correct" : "5" ,
		"expl" : 'RAM chip size = 1k ×8[1024 words of 8 bits each] RAM to construct =16k ×16 Number of chips required = (16k x 16)/ ( 1k x 8)= (16 x 2)[16 chips vertically with each having 2 chips horizontally] So to select one chip out of 16 vertical chips, we need 4 x 16 decoder. Available decoder is  2 x 4 decoder. To be constructed is 4 x 16 decoder. Hence 4 + 1 = 5 decoders are required.',
	},
	{
		"ques" : "5. 25 persons are in a room. 15 of them play hockey, 17 of them play football and 10 of them play both hockey and football. Then the number of persons playing neither hockey nor football is:",
		"ans" : ["2","17","13","3"],  /* array of options*/
		"correct" : "3" ,
		"expl" : "25 - (15+ 17-10)",
	},
	{
		"ques" : "6. Suppose we have a O(n) time algorithm that finds median of an unsorted array. Now consider a QuickSort implementation where we first find median using the above algorithm, then use median as pivot. What will be the worst case time complexity of this modified QuickSort.",
		"ans" : ["O(n^2 Logn)","O(n^2)","O(n Logn Logn)","O(nLogn)"],  /* array of options*/
		"correct" : "O(nLogn)" ,
		"expl" : "If we use median as a pivot element, then the recurrence for all cases becomes T(n) = 2T(n/2) + O(n) The above recurrence can be solved using Master Method. It falls in case 2 of master method.",
	},
	{
		"ques" : "7. What is the chromatic number of an n-vertex simple connected graph which does not contain any odd length cycle? Assume n >= 2.",
		"ans" : ["2","3","n-1","n"],  /* array of options*/
		"correct" : "2" ,
		"expl" : "The chromatic number of a graph is the smallest number of colours needed to colour the vertices of so that no two adjacent vertices share the same colour.",
	},
	{
		"ques" : "8. In an IPv4 datagram, the M bit is 0, the value of HLEN is 10, the value of total length is 400 and the fragment offset value is 300. The position of the datagram, the sequence numbers of the first and the last bytes of the payload, respectively are",
		"ans" : ["Last fragment, 2400 and 2789","First fragment, 2400 and 2759","Last fragment, 2400 and 2759","Middle fragment, 300 and 689"],  /* array of options*/
		"correct" : "Last fragment, 2400 and 2759" ,
		"expl" : "M = 0 indicates that this packet is the last packet among all fragments of original packet. So the answer is either A or C. It is given that HLEN field is 10. Header length is number of 32 bit words. So header length = 10 * 4 = 40 Also, given that total length = 400. Total length indicates total length of the packet including header. So, packet length excluding header = 400 - 40 = 360 Last byte address = 2400 + 360 - 1 = 2759 (Because numbering starts from 0)",
	},
	{
		"ques" : "9. If two fair coins are flipped and at least one of the outcomes is known to be a head, what is the probability that both outcomes are heads?",
		"ans" : ["1/3","1/2","1/4","2/3"],  /* array of options*/
		"correct" : "1/3" ,
		"expl" : "Since we know one outcome is head, there are only three possibilities {h, t}, {h, h}, {t, h} The probability of both heads = 1/3",
	},
	{
		"ques" : "10. One of the purposes of using intermediate code in compilers is to",
		"ans" : ["make parsing and semantic analysis simpler","improve error recovery and error reporting","increase the chances of reusing the machine-independent code optimizer in other compilers","improve the register allocation"],  /* array of options*/
		"correct" : "increase the chances of reusing the machine-independent code optimizer in other compilers" ,
		"expl" : "After semantic Analysis, the code is converted into intermediate code which is language independent, the advantage of converting into intermediate code is to improve the performance of code generation and to increase the chances of reusing the machine-independent code optimizer in other compilers",
	}
];
var result=0;
function ansArray(arr,n)
{
	var output="";
	for(var i=0; i<arr.length; i++)
	{
		output+='<input type="radio" name="'+(n+1)+'" id="'+n+''+i+'" />'+arr[i]+'<br>';
	}
	return(output);
}
function build()  // active on start quiz
{
	document.getElementById("start").style.visibility="hidden";
	for(var i=0; i<quiz.length; i++)
	{
		var obj=quiz[i]; // info of each object is here
		/*alert(obj.ques);
		alert(obj.ans);
		alert(obj.correct);*/
		var output="<div>"+obj.ques+"<br>";
		output+=ansArray(obj.ans,i);
		output+="<span></span></div>";
		document.getElementById("quiz").innerHTML+=output+"<br>";
	}
	document.getElementById("submit").style.visibility="visible";
}
function check()       // active on submit click
{
	var correct=0;
	var selected=["",""];
	for(var i=0; i<quiz.length; i++)
	{
		var index=-1;
		for(var j=0; j<4; j++)
		{
			var ch=document.getElementsByName(i+1)[j];
			if(ch.checked==true)
			{
				index=j;
			}
		}
		var obj=quiz[i];
		if(index!=-1)
		{
			selected[i]=obj.ans[index];
		}
		else
		{
			selected[i]="";
		}
		//document.getElementsByTagName("span")[i].innerHTML="Correct Answer : "+obj.correct+"<br>Explanation : "+obj.expl;
	}
	for(var k=0; k<quiz.length; k++)
	{
		var obj=quiz[k];
		/*alert(selected[k]);
		alert(obj.correct);
		alert(selected[k].localeCompare(obj.correct)) //string comparison*/
		if(selected[k].localeCompare(obj.correct)==0)
		{
			correct++;
		}
	}
	result=correct;
	var cr=document.createAttribute("disabled");
	cr.value="disabled";
	document.getElementById("submit").attributes.setNamedItem(cr);  // disable submit button
	document.getElementById("show").style.visibility="visible";
	document.getElementById("result").style.visibility="visible";
	for(var i=0; i<quiz.length; i++)
	{
		for(var j=0; j<4; j++)
		{
			var out=i+""+j;
			document.getElementById(out).setAttribute("disabled","true");
		}
	}
	clearInterval(set);
}
function results()
{
	alert("Your Score : "+result*4+" Out of 40\n  Thank You!");
}
function showAnswers()
{
	for(var i=0; i<quiz.length; i++)
	{
		var obj=quiz[i];
		document.getElementsByTagName("span")[i].innerHTML="Correct Answer : "+obj.correct+"<br>Explanation : "+obj.expl;
	}
}
var counter=600;
var set;
function time()
{
	counter--;
	var minute=Math.floor(counter/60); 
	//we only need quotient
	var second=counter%60; 
	if(minute<10)
	minute="0"+minute;
	if(second<10)
	second="0"+second;
	if(minute==0 && second==0 )
	{
		document.getElementById("submit").addEventListener("click",check());
	}
	document.getElementById("time").innerHTML=minute+":"+second;
}
function timer()
{
	alert("This Quiz consists of 10 questions with each question carrying 4 marks which has to completed in 10 minutes. Marks will be awarded for correct answers and no marks for unattempted and wrong answers. Click on submit after completion.")
	build()
	set=setInterval(time,1000);   // 1000 millisec means 1 sec
}
function submitForm()
{
	var username=document.getElementsByTagName("input")[0].value;
	var roll=document.getElementsByTagName("input")[1].value;
	var pass=document.getElementsByTagName("input")[2].value;
	if(pass.localeCompare("123")==0)
	{
		if(username!="" && roll!="")
		return(true);
		else
		{
			document.getElementsByTagName("span")[0].innerHTML="Fill all the details";
			return(false);
		}
	}
	else
	{
		document.getElementsByTagName("span")[0].innerHTML="Password Incorrect";
		return(false);
	}
}
function namecheck()
{
	var len=document.getElementsByTagName('input')[0].value.length;
	var value=document.getElementsByTagName('input')[0].value;
	if(value.match(/^[a-z A-Z .]+$/ig) || value=="")
	{
		if(len>20)
		document.getElementsByTagName("span")[0].innerHTML="Name must be of atmost 20 letters";
		else
		document.getElementsByTagName("span")[0].innerHTML="";
	}
	else
	{
		document.getElementsByTagName("span")[0].innerHTML="Name must contain Characters";
	}
}