#include <iostream>
#include<queue>
using namespace std;
int main(){
     queue<int> q;
     q.push(11);
     q.push(12);
     q.push(13);
     q.push(14);
     q.push(15);
     q.push(16);
     while(!q.empty()){
        cout<<q.front()<<" ";
        q.pop();
     }
}