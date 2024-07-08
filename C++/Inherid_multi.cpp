#include <iostream>
using namespace std;

class A{
	public:
		void f1(){
			cout<<"function of class A";
		}
};
class B{
	public:
		void f1(){
			cout<<"function of class B";
		}
};
class C:public A,public B{
	
};
int main(){
	C c;
//	c.f1();  diamond problem ----conflict ambiguity
	c.A::f1();  //scope resolution operator
}