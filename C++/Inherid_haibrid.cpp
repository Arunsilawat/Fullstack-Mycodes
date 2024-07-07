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
		void f2(){
			cout<<"function of class B";
		}
};
class C:public A{
	public:
		void f3(){
			cout<<"function of class C";
		}
};
class D:public C,public B{
	public:
		void f4(){
			cout<<"function of class D";
		}
};

int main(){
	D d;
	d.f4();
	d.f3();
	d.f2();
	d.C::f1();   //diamond problem
}