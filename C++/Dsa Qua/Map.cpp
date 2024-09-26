#include <bits/stdc++.h>
using namespace std;

int main(){
  unordered_map<int,string>m;
  m[11]="apple";
  m.insert({2,"banana"});
  m.insert(make_pair(3,"pineapple"));
  unordered_map<int,string>:: iterator it;

  for(it=m.begin();it!=m.end();it++){
    cout<<(*it).first<<" "<<(*it).second<<" ";
  }
  cout<<endl;

  for(auto i:m){
    cout<<i.first<<" "<<i.second<<" ";
  }
   
  
  
}