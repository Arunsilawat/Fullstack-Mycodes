#include <iostream>
using namespace std;
int main(){
	int arr[6]={34,55,76,88,87,54};
	   int highest= 0;
       int secondHighest=0;

    for(int i=0;i<6;i++){
        if(arr[i]>highest) {
          secondHighest=highest;
          highest=arr[i];
        }
		else if(arr[i]>secondHighest && arr[i]!=highest){
            secondHighest=arr[i];
        }
    }
    cout<<"Highest : "<<highest<<endl;
    cout<<"Second Highest : "<<secondHighest<<endl;
}