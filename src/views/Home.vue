<template> 
<br>
<br>
<br>
<div class="container">
    <div class="row">
    <div class="col-sm-4">
       <!-- category start here -->
      <div class="nav">
        <div class="multi-level">
           
            <div class="item" v-for="(item) in categories" :key="item.key">
                <input type="checkbox" :id="item.key"/>
                <img src="../assets/images/Arrow.png" class="arrow" v-if="item.parent!=='no'"><label v-if="item.parent=='no' || item.parent!=='no' " :for="item.key">{{item.name}}</label>
              
                <ul v-for="(itemp,index) in categoriesp" :key="itemp.key">
                    <li v-if="itemp.parentid==item.key">
                      <div class="sub-item">
                        <input type="checkbox" :id="itemp.key+index"/>
                        <img src="../assets/images/Arrow.png" class="arrow" v-if="itemp.parentid==item.key && itemp.parent!=='no'"><label :for="itemp.key+index" v-if="itemp.parentid==item.key && itemp.parent!=='no'">{{itemp.name}}</label>
                        <a href="#" :for="itemp.key+index" v-if="itemp.parentid==item.key && itemp.parent=='no'">{{itemp.name}}</a>
                        <!-- <ul v-for="itemf in categoriesp" :key="itemf.key">
                            <li v-if="itemf.parentid==itemp.key"><a href="#">{{itemf.name}}</a></li>
                        </ul> -->
                          <ul v-for="(itemf) in categoriesp" :key="itemf.key">
                              <li v-if="itemf.parentid==itemp.key">
                                <div class="sub-item">
        
                                  <input type="checkbox" :id="itemf.key+kk"/>
                                  <img src="../assets/images/Arrow.png" class="arrow" v-if="itemf.parentid==itemp.key && itemf.parent!=='no'"><label :for="itemf.key+kk" v-if="itemf.parentid==itemp.key  && itemf.parent!=='no'">{{itemf.name}}</label>
                                  <a href="#" :for="itemf.key+kk" v-if="itemf.parentid==itemp.key && itemf.parent=='no'">{{itemf.name}}</a>
                                  <ul v-for="items in categoriesp" :key="items.key+kk">
                                      <li v-if="items.parentid==itemf.key"><a href="#">{{items.name}}</a></li>
                                  </ul>
                                </div>
                              </li>
                          </ul>
                        
                        </div>
                      </li>
                  
                 
                    
                </ul>
            </div>
        
 
         
        </div> 
    

        
    </div>
    <!-- category end here -->
    </div>
    <div class="col-sm-8">
      Add New Category
     <form @submit="onsubmit">
            <div class="form-group">
              <label >Category Name</label>
              <input type="text" v-model="categorieAdd.name"  class="form-control" placeholder="Category">
            </div>
            <div class="form-group">
                <label >Category Parent</label>
                <select class="form-control" v-model="categorieAdd.parentid">
                  <option selected value="null" >***Single***</option>
                  <option v-for="item in categoriesall" :key="item.key" :value="item.key">{{item.name}}</option>
                </select>
            </div>
            <!-- <div class="form-group">
                <label >This is Parent or no</label>
                <select class="form-control" v-model="categorieAdd.parent">
                  <option  value="no" >No</option>
                  <option  value="yes" >Yes</option>
                </select>
            </div> -->
      <button type="submit" class="btn btn-primary">Save</button>
      </form> 
      <br>
      <br>
      Edit Category
     <form @submit="onupdate">
            <div class="form-group">
                <label>Category Name</label>
                <select class="form-control" v-model="categorieUpdate.key">
                  <option v-for="item in categoriesall" :key="item.key" :value="item.key">{{item.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label >Category Parent</label>
                <select class="form-control" v-model="categorieUpdate.parentid">
                  <option selected="selected" value="null">***Single***</option>
                  <option v-for="item in categoriesall" :key="item.key" :value="item.key">{{item.name}}</option>
                </select>
            </div>
            <!-- <div class="form-group">
                <label >Parent category is Parent or no</label>
                <select class="form-control" v-model="categorieUpdate.parent">
                  <option  value="no" >No</option>
                  <option  value="yes" >Yes</option>
                </select>
            </div> -->
      <button type="submit" class="btn btn-primary">Save</button>
      </form> 
    </div>
    
  </div>

    
</div>

</template>
<style>
/*Global*/
html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: helvetica, sans-serif;
}

/*Func*/

.multi-level, .item ul, .nav input[type="checkbox"] {
    display: none;
}
 .multi-level, .item input:checked ~ ul {
    display: block;
}



.arrow {
    width: 12px;
    height: 12px;
    vertical-align: middle;
    float: left;
    z-index: 0;
    margin: 17px 1em 0 2em;
}
.item input + .arrow {
    transform: rotate(-90deg);
    transition: 0.1s;
}
.item input:checked + .arrow {
    transform: rotate(0deg);
    transition: 0.1s;
}

label:hover {
    cursor: pointer;
}
label {
    width: 100%;
    display: block;
    z-index: 3;
    position: relative;
}
.nav {
    width: 100%;
    background-color: white;
    overflow-x: hidden;
    border-bottom: 1px solid #CFD8DC;
}

#nav-icon {
    font-size: 28px;
    line-height: 50px;
    padding-left: 1em;
    color: white;
    background-color: #F44336;
}

.nav ul, .nav li, label {
    line-height: 50px;
    margin: 0;
    padding: 0 2em;
    list-style: none;
    text-decoration: none;
    color: #90A4AE;
    font-weight: 100;
    width: 800px;
}
.item ul {
    padding: 0 0.25em;
}
.nav li a {
    line-height: 50px;
    margin: 0;
    padding: 0 4em;
    list-style: none;
    text-decoration: none;
    color: #90A4AE;
    font-weight: 100;
}  


</style>


<script>
// @ is an alias to /src
import firebase from '../Firebase'
export default {
  name: 'Home',
  data(){
  return { 
          categories:[],
          categoriesp:[],
          categoriesall:[],
          ref:firebase.firestore().collection('categories'),
          categorieAdd:{},
          categorieUpdate:{},
          childrens:[],
          children:[],
          i:0,
          verif:false,
          oldkey:''
            
        } 
   
        },
  created(){
       
      this.ref.onSnapshot((querySnapshot)=>{
            this.categories=[]
            querySnapshot.forEach((doc)=>{
                if(doc.data().parentid=='null'){
              this.categories.push({
                key:doc.id,
                name:doc.data().name,
                parentid:doc.data().parentid,
                parent:doc.data().parent
              })
              
                }
            })
          })
      this.ref.onSnapshot((querySnapshot)=>{
            this.categoriesp=[]
            querySnapshot.forEach((doc)=>{
                if(doc.data().parentid!=='null'){
              this.categoriesp.push({
                key:doc.id,
                name:doc.data().name,
                parentid:doc.data().parentid,
                parent:doc.data().parent
              })
              
                }
            })
           
          })    
      this.ref.onSnapshot((querySnapshot)=>{
            this.categoriesall=[]
            querySnapshot.forEach((doc)=>{
              
              this.categoriesall.push({
                key:doc.id,
                name:doc.data().name,
                parentid:doc.data().parentid,
              })
              
             
            })
            
          })

        


  },
  methods:{
    onsubmit(evt){
      
            evt.preventDefault()
            console.log(this.categorieAdd.parentid)
           // this.categorieAdd.children.push({children:this.categorieAdd.name})
            if(this.categorieAdd.parentid=='undefined'){
              this.categorieAdd.parentid="null"
            }
            this.categorieAdd.parent="no"
      this.ref.add(this.categorieAdd).then(()=>{
        if(this.categorieAdd.parentid!=='null'){
          this.ref.doc(this.categorieAdd.parentid).update({
            parent:'yes'
          })
        }
        this.categorieAdd.name=''
        this.categorieAdd.parentid=''
        this.categorieAdd.parent=''
      }).catch((err)=>alert('Error',err))
    },
    onupdate(evt){
      evt.preventDefault()
       this.ref.doc(this.categorieUpdate.key).get().then(data=>{
      this.oldkey=data.data().parentid
     }).then(()=>{
         this.ref.doc(this.categorieUpdate.key).update({
          parentid:this.categorieUpdate.parentid,
        }).then(()=>{ 
          //
          this.ref.doc(this.categorieUpdate.parentid).update({
            parent:'yes'
          }).then(()=>{
            this.ref.onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
             if(doc.data().parentid==this.oldkey){
               this.verif=true
             }
            })
            if(this.verif==true){
              this.ref.doc(this.oldkey).update({
                parent:'yes'
              })
            }else{
              this.ref.doc(this.oldkey).update({
                parent:'no'
              })
            }
          }) 
          })
          
          // 
        this.categorieUpdate.key=''
        this.categorieUpdate.parentid=''
       // this.categorieUpdate.parent=''
        }).then(()=>{
     
        })
       })
     
      
    }

    }
  // }      
}
</script>
