#include <iostream>
using namespace std;
int main(){
	int cost,amount;
	float discount;
	cout<<"enter the cost of pen :\n";
	cin>>cost;
	amount=cost;
	if(cost>1000){
		discount=(20/100.0)*amount;
		cout<<"the discount is :"<<discount<<" and the amount to be paid is :"<<amount-discount;
	}
	else{
		discount=(10/100.0)*amount;
		cout<<"the discount is :"<<discount<<" and the amount to be paid is :"<<amount-discount;

	}
	
	
}