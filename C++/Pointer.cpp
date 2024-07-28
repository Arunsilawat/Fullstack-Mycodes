#include <iostream>
using namespace std;
int main(){
	int n=90,*p;
	p=&n;
	cout<<"address of n:"<<p<<endl;
//	cout<<"data stored at n:"<<n<<endl;
	cout<<"data stored at n:"<<*p<<endl;

    *p=*p+10;
	cout<<"data stored at n:"<<*p<<endl;

}

//======================higher number=================================


#include <iostream>
using namespace std;
int main(){
   int n=90,n1=999,*p,*p1;
   p=&n;
   p1=&n1;
   
   if(*p>*p1)
   cout<<"higher"<<*p;
   else
   cout<<"higher"<<*p1;



}

//========================addition====================
#include <iostream>
using namespace std;
int main(){
   int n=90,n1=999,*p,*p1;
   p=&n;
   p1=&n1;
   
   cout<<"addition"<<*p+*p1;



}