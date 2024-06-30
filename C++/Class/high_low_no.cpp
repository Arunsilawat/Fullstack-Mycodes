#include <iostream>
using namespace std;
 
 class Great{
 	private:
 		int n1,n2,n3;
 		public:
 			Great(){
 				cout<<"enter 3 number";
 				cin>>n1>>n2>>n3;
			 }
			 Great(int a,int b,int c){
			 	n1=a;
			 	n2=b;
			 	n3=c;
			 }
			 void great(){
			 	if(n1>n2 && n1>n3)
			 	  cout<<n1<<"is greatest";
			 	else if(n2>n1 && n2>n3)
			 	  cout<<n2<<"is greatest";
			 	 else 
			 	  cout<<n3<<"is greatest";
			 }
			 void display(){
			 	
			 }
 };
 
 int main(){
 	
//	Great g(33,4,5);
// 	g.great();
 	
 	Great g;
 	g.great();
 	
 	
 }