#include <iostream>
#include <stack>
using namespace std;
//push(),pop(),top(),empty(),
int main(){
   stack<int> st;
   st.push(11);
   st.push(20);
   st.push(30);
   st.push(40);
   st.push(50);
   st.push(60);
   st.push(70);
   st.push(80);
   //cout<<"Top: "<<st.top()<<endl;
   //st.pop(); st.pop();
   //cout<<"Top: "<<st.top()<<endl;
   //no indexing norange based,no itrerator based loop
   //cout<<st.empty(); //return true false 0 or 1

   while(!st.empty()){
    cout<<st.top()<<" ";
    st.pop();
   }

   //string reverse....
   string s="contant";
   stack<char> st1;
   for(int i=0;i<s.size();i++){
    st1.push(s[i]);
   }

    while(!st1.empty()){
      cout<<st1.top();
      st1.pop();
   }

   //application-->Back tracking,DFS,
   //function call,arinthetic expression,
   //data reverse,delimiter check,
}