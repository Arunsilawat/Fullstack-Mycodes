#include <iostream>
using namespace std;

int main(){
	double salary,bonus;
	int year;
	cout<<"enter your salary:";
	cin>>salary;
	if(year>5){
		cout<<"U R ELIGIBLE for bonus\n";
		bonus=salary*(5.0/100);
		cout<<"u got bonus of rupees:"<<bonus<<endl;
		cout<<"u got salary of rupees:"<<salary+bonus;

	}
	else{
		cout<<"u not eligible for bonus\n";
		cout<<"u got salary of rupees:"<<salary;
	}

	
	return 0;
}