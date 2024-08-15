#include <iostream>
using namespace std;
int main(){
     int num,last,sum=0;
     cout<<"enter reverse number :";
     cin>>num;
     while(num!=0){
     	last=num%10;
     	sum=sum*10+last;
     	num=num/10;
	 }
	 cout<<"reverse og given no :"<<sum;
}