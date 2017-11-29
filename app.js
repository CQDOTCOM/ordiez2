var vm = new Vue({
  el: '#app',
  data: {
    status: {}
  },
  created: function() {
    this.loadOrders()
  },
  methods: {
    loadOrders: function() {
      this.status = 'Loading...'
      var vm = this
      axios.get('https://lit-plains-53700.herokuapp.com/orders').then(function(response) {
        vm.status = response.data.orders
        console.log(response.data.orders)
      }).catch(function(error) {
        vm.status = 'An error occured' + error
      })
    }
  }
})

$(document).ready(function() {
  $('.modal').modal()
})
