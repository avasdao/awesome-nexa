<template>
    <main>
        <div class="relative isolate overflow-hidden pt-16">
            <!-- Secondary navigation -->
            <header class="pb-4 pt-6 sm:pb-6">
                <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                    <h1 class="text-base/7 font-semibold text-gray-900">Cashflow</h1>
                    <div class="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
                        <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" :class="item.current ? 'text-indigo-600' : 'text-gray-700'">{{ item.name }}</a>
                    </div>
                    <a
                        href="#"
                        class="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <PlusSmallIcon class="-ml-1.5 size-5" aria-hidden="true" />
                        New invoice
                    </a>
                </div>
            </header>

            <!-- Stats -->
            <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                <dl class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                    <div
                        v-for="(stat, statIdx) in stats"
                        :key="stat.name"
                        :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8']"
                    >
                        <dt class="text-sm/6 font-medium text-gray-500">{{ stat.name }}</dt>
                        <dd :class="[stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700', 'text-xs font-medium']">{{ stat.change }}</dd>
                        <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{{ stat.value }}</dd>
                    </div>
                </dl>
            </div>

            <div
                class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                aria-hidden="true"
            >
                <div
                    class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                    style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%);"
                />
            </div>
        </div>

        <div class="space-y-16 py-16 xl:space-y-20">
            <!-- Recent activity table -->
            <div>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 class="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">Recent activity</h2>
                </div>
                <div class="mt-6 overflow-hidden border-t border-gray-100">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <table class="w-full text-left">
                                <thead class="sr-only">
                                    <tr>
                                        <th>Amount</th>
                                        <th class="hidden sm:table-cell">Client</th>
                                        <th>More details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="day in days" :key="day.dateTime">
                                        <tr class="text-sm/6 text-gray-900">
                                            <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                                                <time :datetime="day.dateTime">{{ day.date }}</time>
                                                <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                                <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                            </th>
                                        </tr>
                                        <tr v-for="transaction in day.transactions" :key="transaction.id">
                                            <td class="relative py-5 pr-6">
                                                <div class="flex gap-x-6">
                                                    <component :is="transaction.icon" class="hidden h-6 w-5 flex-none text-gray-400 sm:block" aria-hidden="true" />
                                                    <div class="flex-auto">
                                                        <div class="flex items-start gap-x-3">
                                                            <div class="text-sm/6 font-medium text-gray-900">{{ transaction.amount }}</div>
                                                            <div :class="[statuses[transaction.status], 'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset']">{{ transaction.status }}</div>
                                                        </div>
                                                        <div v-if="transaction.tax" class="mt-1 text-xs/5 text-gray-500">{{ transaction.tax }} tax</div>
                                                    </div>
                                                </div>
                                                <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                                <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                                            </td>
                                            <td class="hidden py-5 pr-6 sm:table-cell">
                                                <div class="text-sm/6 text-gray-900">{{ transaction.client }}</div>
                                                <div class="mt-1 text-xs/5 text-gray-500">{{ transaction.description }}</div>
                                            </td>
                                            <td class="py-5 text-right">
                                                <div class="flex justify-end">
                                                    <a :href="transaction.href" class="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500">
                                                        View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ transaction.invoiceNumber }}, {{ transaction.client }}</span>
                                                    </a>
                                                </div>
                                                <div class="mt-1 text-xs/5 text-gray-500">Invoice <span class="text-gray-900">#{{ transaction.invoiceNumber }}</span></div>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent client list-->
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div class="flex items-center justify-between">
                        <h2 class="text-base/7 font-semibold text-gray-900">Recent clients</h2>
                        <a href="#" class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">View all<span class="sr-only">, clients</span></a>
                    </div>
                    <ul role="list" class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                        <li v-for="client in clients" :key="client.id" class="overflow-hidden rounded-xl border border-gray-200">
                            <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                <img :src="client.imageUrl" :alt="client.name" class="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                                <div class="text-sm/6 font-medium text-gray-900">{{ client.name }}</div>
                                <Menu as="div" class="relative ml-auto">
                                    <MenuButton class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Open options</span>
                                        <EllipsisHorizontalIcon class="size-5" aria-hidden="true" />
                                    </MenuButton>
                                    <transition
                                        enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95"
                                    >
                                        <MenuItems class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            <menuitem v-slot="{ active }">
                                                <a href="#" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']">View<span class="sr-only">, {{ client.name }}</span></a>
                                            </menuitem>
                                            <menuitem v-slot="{ active }">
                                                <a href="#" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']">Edit<span class="sr-only">, {{ client.name }}</span></a>
                                            </menuitem>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                            <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Last invoice</dt>
                                    <dd class="text-gray-700">
                                        <time :datetime="client.lastInvoice.dateTime">{{ client.lastInvoice.date }}</time>
                                    </dd>
                                </div>
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Amount</dt>
                                    <dd class="flex items-start gap-x-2">
                                        <div class="font-medium text-gray-900">{{ client.lastInvoice.amount }}</div>
                                        <div :class="[statuses[client.lastInvoice.status], 'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset']">{{ client.lastInvoice.status }}</div>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
    import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon, Bars3Icon, EllipsisHorizontalIcon, PlusSmallIcon } from "@heroicons/vue/20/solid";
    import { BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

    const navigation = [
        { name: "Home", href: "#" },
        { name: "Invoices", href: "#" },
        { name: "Clients", href: "#" },
        { name: "Expenses", href: "#" },
    ];
    const secondaryNavigation = [
        { name: "Last 7 days", href: "#", current: true },
        { name: "Last 30 days", href: "#", current: false },
        { name: "All-time", href: "#", current: false },
    ];
    const stats = [
        { name: "Revenue", value: "$405,091.00", change: "+4.75%", changeType: "positive" },
        { name: "Overdue invoices", value: "$12,787.00", change: "+54.02%", changeType: "negative" },
        { name: "Outstanding invoices", value: "$245,988.00", change: "-1.39%", changeType: "positive" },
        { name: "Expenses", value: "$30,156.00", change: "+10.18%", changeType: "negative" },
    ];
    const statuses = {
        Paid: "text-green-700 bg-green-50 ring-green-600/20",
        Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
        Overdue: "text-red-700 bg-red-50 ring-red-600/10",
    };
    const days = [
        {
            date: "Today",
            dateTime: "2023-03-22",
            transactions: [
                {
                    id: 1,
                    invoiceNumber: "00012",
                    href: "#",
                    amount: "$7,600.00 USD",
                    tax: "$500.00",
                    status: "Paid",
                    client: "Reform",
                    description: "Website redesign",
                    icon: ArrowUpCircleIcon,
                },
                {
                    id: 2,
                    invoiceNumber: "00011",
                    href: "#",
                    amount: "$10,000.00 USD",
                    status: "Withdraw",
                    client: "Tom Cook",
                    description: "Salary",
                    icon: ArrowDownCircleIcon,
                },
                {
                    id: 3,
                    invoiceNumber: "00009",
                    href: "#",
                    amount: "$2,000.00 USD",
                    tax: "$130.00",
                    status: "Overdue",
                    client: "Tuple",
                    description: "Logo design",
                    icon: ArrowPathIcon,
                },
            ],
        },
        {
            date: "Yesterday",
            dateTime: "2023-03-21",
            transactions: [
                {
                    id: 4,
                    invoiceNumber: "00010",
                    href: "#",
                    amount: "$14,000.00 USD",
                    tax: "$900.00",
                    status: "Paid",
                    client: "SavvyCal",
                    description: "Website redesign",
                    icon: ArrowUpCircleIcon,
                },
            ],
        },
    ];
    const clients = [
        {
            id: 1,
            name: "Tuple",
            imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg",
            lastInvoice: { date: "December 13, 2022", dateTime: "2022-12-13", amount: "$2,000.00", status: "Overdue" },
        },
        {
            id: 2,
            name: "SavvyCal",
            imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg",
            lastInvoice: { date: "January 22, 2023", dateTime: "2023-01-22", amount: "$14,000.00", status: "Paid" },
        },
        {
            id: 3,
            name: "Reform",
            imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg",
            lastInvoice: { date: "January 23, 2023", dateTime: "2023-01-23", amount: "$7,600.00", status: "Paid" },
        },
    ];

    const mobileMenuOpen = ref(false);
</script>
