#include <iostream>
using namespace std;
//difference between shallow copy and deep copy
class A{
	public:
		A(){
			cout<<"class A constructo\n";
		}
		~A(){
			cout<<"class A destructor\n";
		}
};
class B: public A{
	public:
		B(){
			cout<<"class B constructo\n";
		}
		~B(){
			cout<<"class B destructor\n";
		}
};
class C:public B{
	public:
		C(){
			cout<<"class C constructo\n";
		}
		~C(){
			cout<<"class C destructor\n";
		}
};
int main(){
//	C c;
  //   A obj;
  //   B obj1;
     {
     	A obj;
	 }
	   B obj1;
}