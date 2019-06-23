/**
 * In Mixins find functionalities that are reusable for components
 */
export default {
  getList () {
    var self = this
    self.contactList = ''
    self.$http
      .get('https://randomuser.me/api/?results=50')
      .then(response => {
        self.contactList = response.data
      })
    console.log(self.contactList, 'servie')
    return self.contactList
  }
}

//   var self = this
//   self.contactList = ''
//   this.$http
//     .get('https://randomuser.me/api/?results=50')
//     .then(response => {
//       self.contactList = response.data
//     })
//   console.log(self.contactList, 'servie')
//   return self.contactList
//     }
//   }
// }
