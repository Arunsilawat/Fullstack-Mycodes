#include <iostream>
using namespace std;

class A{
	public:
		void f1(){
			cout<<"function of class A";
		}
};
class B:public A{
	public:
		void f1(){
			cout<<"function of class B";
		}
};
class C:public A{
	
};

int main(){
	B b;
	b.f1();
	
//	C c;
//    c.f1() ;
}