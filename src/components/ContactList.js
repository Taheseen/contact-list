export default {
  name: 'Contact-List',
  data: () => ({
    dataSet: '',
    activetab: 'A',
    dataLoaded: false,
    profiletab: '',
    carouselList: [],
    tabList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }),
  mounted () {
    var self = this
    this.$http
      .get('https://randomuser.me/api/?results=50')
      .then(response => {
        self.dataSet = response.data
        self.dataLoaded = true
      })
  },
  computed: {
    filtered: function () {
      var self = this
      self.orderedList = []
      self.dataSet.results.map(function (item) {
        self.carouselList.push({
          image: item.picture.large,
          email: item.email
        })
        console.log(self.tabList, 'tablist')
        self.tabList.filter(function (letter) {
          if (letter.toLowerCase() === item.name.last.substring(0, 1)) {
            if (!self.orderedList || !self.orderedList[letter]) {
              self.orderedList[letter] = []
            }
            self.orderedList[letter].push(item)
          }
        })
      })
      return self.orderedList
    }
  },
  methods: {
    scrollToProfile () {
      let el = document.getElementsByClassName('active')[0]
      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    }
  }
}
