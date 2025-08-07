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
                        icon: 'i-gridicons-globe',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        defaultOpen: false,
                        children: [
                            {
                                label: 'Negara', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Provinsi', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                            {
                                label: 'Kabupaten Kota', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                            {
                                label: 'Kecamatan', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                            {
                                label: 'Kelurahan Desa', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Bussiness',
                        icon: 'i-basil-bag-outline',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        defaultOpen: false,
                        children: [
                            {
                                label: 'Bussiness Category', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Sub Bussiness Category', 
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
                        defaultOpen: false,
                        children: [
                            {
                                label: 'Variant Parameter', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Variant Parameter Sub Bisnis', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Master Product',
                        icon: 'i-fluent-box-20-regular',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        defaultOpen: false,
                        children: [
                            {
                                label: 'Products', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Weight Checker', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'KoinWorks',
                        icon: 'i-iconoir-coin',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        defaultOpen: false,
                        children: [
                            {
                                label: 'Loan Report', 
                                class:'',
                                to: '/xx',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                        label: 'Data Shipment',
                        icon: 'i-mdi-truck-fast',
                        class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                        parent_to: '/xx', 
                        active: false,
                        defaultOpen: false,
                        children: [
                            {
                                label: 'Mitra Ekspedisi', 
                                class:'',
                                to: '/xx',
                                active: false,
                            },
                            {
                                label: 'Log Shipping Cost', 
                                class:'',
                                to: '/xx/detail',
                                active: false,
                            }, 
                        ]
                }, 
                { 
                    label: 'Poolcoin',
                    icon: 'i-clarity-coin-bag-solid',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Satuan',
                    icon: 'i-material-symbols-stacks-outline',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Pooler',
                    icon: 'i-fluent-people-money-20-filled',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Packer',
                    icon: 'i-healthicons-market-stall-outline',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Team Poolapack',
                    icon: 'i-fluent-people-team-16-regular',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Flash Sale',
                    icon: 'i-mdi-flash',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Paramete Sistem',
                    icon: 'i-mingcute-settings-6-line',
                    class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                    to: '/x',
                    children:  null,
                    active: false,
                },
                { 
                    label: 'Banner',
                    icon: 'i-solar-gallery-linear',
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
                icon: 'i-gravity-ui-signal',
                class:'text-white hover:text-primary  hover:!bg-elevated',
                active: false,
                parent_to: '/tes',
                defaultOpen: false,
                children: [
                  {
                    label: 'Broadcast Message', 
                    class:'',
                    to: '/tes',
                    active: false,
                  },
                  {
                    label: 'Feedback Rating', 
                    class:'',
                    to: '/tesx',
                    active: false,
                  },
                  
                ]
              },
              { 
                  label: 'RFQ',
                  icon: 'i-iconoir-chat-bubble',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Event',
                  icon: 'i-material-symbols-light-event-available-sharp',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Referral',
                  icon: 'i-mingcute-link-fill',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Link Media',
                  icon: 'i-mi-link',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Transaksi',
                  icon: 'i-carbon-money',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Log Activity',
                  icon: 'i-ep-document',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                  label: 'Log Search',
                  icon: 'i-material-symbols-light-document-search-outline-sharp',
                  class:' text-white hover:text-primary hover:bg-elevated rounded-md cursor-pointer', 
                  to: '/',
                  children:  null,
                  active: false,
              }, 
              { 
                label: 'Export',
                icon: 'i-lucide-download',
                class:'text-white hover:text-primary  hover:!bg-elevated',
                active: false,
                parent_to: '/tesxxx',
                defaultOpen: false,
                children: [
                  {
                    label: 'Transaksi', 
                    class:'',
                    to: '/tesxx',
                    active: false,
                  },
                  {
                    label: 'RFQ', 
                    class:'',
                    to: '/tesxxx',
                    active: false,
                  },
                  
                ]
              },
              
        ]
  },
]