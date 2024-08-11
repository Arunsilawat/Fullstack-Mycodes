#include <iostream>
using namespace std;
int main(){
	int temp;
	cout<<"enter temperature :\n";
	cin>>temp;
	if(temp<0)cout<<"freezing weather :";
    else if(temp<10) cout<<"very cold weather :";
    else if(temp<20) cout<<"cold weather :";
    else if(temp<30) cout<<"normal weather :";
    else if(temp<40) cout<<"it's hot weather :";

    else
    cout<<"very hot :";
}