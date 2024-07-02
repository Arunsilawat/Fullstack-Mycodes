#include <iostream>
using namespace std;
int main(){
	int age;
	char gender;
	cout<<"Enter age and gender ( 'M' & 'F' ) :";
	cin>>age>>gender;
	if(age>21)
	cout<<"The "<<gender<<" is eligible for marrige";
	else
	cout<<"The "<<gender<<" is not eligible for marrige";
	
}