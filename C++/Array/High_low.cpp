#include <iostream>
using namespace std;
int main(){
	int arr[6]={43,45,66,56,77,65};
	
	int highest = INT_MIN;
    int lowest = INT_MAX;

    for(int i = 0;i<6;i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    cout<<"highest : "<<highest<<endl;
    cout<<"lowest : "<<lowest<<endl;
}