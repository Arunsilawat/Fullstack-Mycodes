#include <iostream>
using namespace std;
int main(){
	string st="apple is good for good health ";
	//find()---->index nummber
	int result=st.find("good",0);
	
	cout<<"first good encounter :"<<result<<endl;
	
    result=st.find("good",result+1);
	
	cout<<"first good encounter :"<<result<<endl;

}