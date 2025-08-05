export let menu = [
    {
        label : "Dashboard",
        data : [
                { 
                    label: 'Dashboard',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/',
                    children:  null,
                    active: false,
                }, 
                { 
                    label: 'Sebaran Data',
                    icon: 'i-material-symbols-map-search-outline-sharp',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/tes1',
                    children:  null,
                    active: false,
                }, 
                { 
                    label: 'Laporan Keuangan',
                    icon: 'i-material-symbols-balance',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/tes1',
                    children:  null,
                    active: false,
                }, 
                { 
                    label: 'Laporan Pembayaran',
                    icon: 'i-tdesign-money',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/tes1',
                    children:  null,
                    active: false,
                },  
            ]
    }, 
    {
        label : "Data Master",
        data : [
                { 
                        label: 'Wilayah Administrasi',
                        icon: 'i-heroicons-presentation-chart-bar',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        children: [
                            {
                                label: 'Introduction', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Installation', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Bussiness',
                        icon: 'i-heroicons-presentation-chart-bar',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        children: [
                            {
                                label: 'Introduction', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Installation', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Variant',
                        icon: 'i-heroicons-presentation-chart-bar',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        children: [
                            {
                                label: 'Introduction', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Installation', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Master Product',
                        icon: 'i-heroicons-presentation-chart-bar',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        children: [
                            {
                                label: 'Introduction', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Installation', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'KoinWorks',
                        icon: 'i-heroicons-presentation-chart-bar',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        children: [
                            {
                                label: 'Introduction', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Installation', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Data Shipment',
                        icon: 'i-heroicons-presentation-chart-bar',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        children: [
                            {
                                label: 'Introduction', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Installation', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                    label: 'Poolcoin',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Satuan',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Pooler',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Packer',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Team Poolapack',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Flash Sale',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Paramete Sistem',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Banner',
                    icon: 'i-heroicons-presentation-chart-bar',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
            ]
    },
    {
    label : "Data Operasional",
    data : [
            { 
                label: 'CRM',
                icon: 'i-lucide-book-open',
                class:'text-white hover:text-primary  hover:!bg-elevated',
                active: false,
                parent_to: '/tes',
                defaultOpen: false,
                children: [
                  {
                    label: 'Introduction', 
                    class:'',
                    to: '/tes',
                    active: false,
                  },
                  {
                    label: 'Installation', 
                    class:'',
                    to: '/tes/detail',
                    active: false,
                  },
                  
                ]
              },
              { 
                  label: 'RFQ',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Event',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Referral',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Link Media',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Transaksi',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Log Activity',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Log Search',
                  icon: 'i-heroicons-presentation-chart-bar',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                label: 'Export',
                icon: 'i-lucide-book-open',
                class:'text-white hover:text-primary  hover:!bg-elevated',
                active: false,
                parent_to: '/tes',
                defaultOpen: false,
                children: [
                  {
                    label: 'Introduction', 
                    class:'',
                    to: '/tes',
                    active: false,
                  },
                  {
                    label: 'Installation', 
                    class:'',
                    to: '/tes/detail',
                    active: false,
                  },
                  
                ]
              },
              
        ]
  },
]