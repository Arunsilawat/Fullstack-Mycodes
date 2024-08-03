#include <iostream>
using namespace std;
int main(){
	int arr[7]={33,43,55,44,75,54,22};
	int lowest = INT_MAX;
    int secondLowest = 0;

    for(int i=0;i<7;i++){
        if(arr[i]<lowest){
            secondLowest=lowest;
            lowest=arr[i];
        } 
		else if(arr[i]<secondLowest && arr[i]!=lowest){
            secondLowest=arr[i];
        }
    }
    cout<<"lowest : "<<lowest<<endl;
    cout<<"second Lowest : "<<secondLowest<<endl;
}