<template>

<div class="contain">
    <b-breadcrumb>
        <b-breadcrumb-item href="#">Dashboard</b-breadcrumb-item>
        <b-breadcrumb-item active>Timesheet</b-breadcrumb-item>
    </b-breadcrumb>
    <h3>Add today's timesheet</h3>
    
     <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
        <b-button-group class="mx-1">
            <b-button variant="outline-danger">Fill Timesheet</b-button>
        </b-button-group> 
        <b-button-group class="col-6"></b-button-group>    
        <b-button-group class="mx-1">
            <b-button variant="danger">Add previous</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
            <b-button variant="primary">Search previous</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
            <b-button variant="warning">Todays Timesheet's</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
            <b-button variant="info">All Timesheet's</b-button>
        </b-button-group>
    </b-button-toolbar><br/>

        <b-table
        id="table-transition-example"
        :items="items"
        :fields="fields"
        striped
        small
        primary-key="a"
        :tbody-transition-props="transProps"
        ></b-table>

</div>
    
    
</template>

<script>
const axios = require('axios');


export default {
    name: 'About',
    components:{
      
    },
    data() {
      return {
        transProps: {
          // Transition name
          name: 'flip-list'
        },
        items: [
          { a: 2, b: 'Two', c: 'Moose' },
          { a: 1, b: 'Three', c: 'Dog' },
          { a: 3, b: 'Four', c: 'Cat' },
          { a: 4, b: 'One', c: 'Mouse' }
        ],
        fields: [
          { key: 'a', sortable: true },
          { key: 'b', sortable: true },
          { key: 'c', sortable: true }
        ]
      }
    },
    async mounted() {
        const config = {
            "Content-Type": "application/json"           
        }
        var a = await axios.get("https://myerp.sjain.io/api/resource/User",{headers: config})
        console.log(a)
        // document.write(a.data)
    }
}
</script>

<style scoped>
   .contain {
       margin-left: 10%;
       margin-right: 10%;
   }
   .table {
       border: 2px solid black;
       box-shadow: 5px 5px 5px 0px;
       margin-left:10px;
       margin-right:10px;
   }

</style>