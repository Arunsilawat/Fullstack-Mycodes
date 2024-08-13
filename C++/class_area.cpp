#include <iostream>
using namespace std;

class Circle{
	private:
		double radius;
		public:
			Circle(){
				cout<<"enter radius";
				cin>>radius;
			}
			Circle(int a){
				radius=a;
			}
			
		void area(){
			cout<<"area :"<<3.141*radius*radius<<" ";
		}	
		void Circumference(){
			cout<<"Circumference :"<<2*3.14*radius;
		}
};

int main(){
	Circle c;
	c.area();
	c.Circumference();
}