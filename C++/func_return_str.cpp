
#include <iostream>
using namespace std;
   
 string average(int a,int b,int c,int d,int e){
 	double avg=a+b+c+d+e;
 	cout<<"average :"<<avg<<endl;
 	return "success";
 }
 
 int main(){
 	int n1,n2,n3,n4,n5;
 	string msg;
 	cout<<"enter 5 numbers :";
 	cin>>n1>>n2>>n3>>n4>>n5;
 	msg=average(n1,n2,n3,n4,n5);
 	cout<<"operation is "<<msg;
 }