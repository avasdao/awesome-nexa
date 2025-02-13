<script setup>
/* Import modules. */
import { jsPDF } from 'jspdf'

useHead({
    title: 'Transaction Receipt by NexaShell',
    meta: [{
        name: 'description',
        content: 'Transaction Receipt'
    }]
})

const route = useRoute()

console.log('ROUTE PARAMS', route.params)

const id = route.params.id

const letterWidth = 216
const a4Width = 0

const defaultTxtColor = 30
const lightTxtColor = 120

const openDoc = () => {
    /* Initialize locals. */
    let lMargin, tMargin, rMargin, bMargin

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        // format: 'a4',
        format: 'letter',
        putOnlyUsedFonts: true,
        floatPrecision: 16, // or "smart", default is 16
    })

    doc.setDocumentProperties({
        title: 'Tx Receipt',
        name: 'tx-receipt.pdf',
        filename: 'tx-receipt.pdf',
        subject: 'Transaction Receipt',
        author: "NexaShell developers",
        keywords: 'nexa, receipt',
        creator: "NEXA.sh",
    })

    /* Set left margin. */
    lMargin = 10

    /* Set right margin. */
    rMargin = letterWidth - 10

    /* Set top margin. */
    tMargin = 15

    // TITLE
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(150)
    doc.text(`NexaShell`, lMargin, tMargin)

    // reset txt color
    doc.setTextColor(defaultTxtColor)

    // TITLE BORDER
    doc.setLineWidth(0.8)
    doc.setDrawColor(210)
    doc.line(lMargin, tMargin + 3, rMargin, tMargin + 3)

    doc.setFontSize(12)
    // doc.setFont('helvetica', 'bold')
    doc.setTextColor(210, 30, 30)
    doc.text(`https://NEXA.sh`, rMargin, tMargin, null, null, 'right');

    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(defaultTxtColor)
    doc.text(`Transaction Receipt`, lMargin, tMargin + 15)

    doc.setFontSize(16)
    doc.setFont('helvetica', 'normal')
    doc.text(`Wallet Address:`, lMargin, tMargin + 30)

    // DISCLAIMER
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(lightTxtColor)
    doc.text(`DISCLAIMER`, lMargin, tMargin + 120)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.`, lMargin, tMargin + 125)

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(lightTxtColor)
    doc.text(`GET A FULL REPORT FOR ANY ADDRESS OR XPUB AT:`, lMargin, tMargin + 170)

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(210, 30, 30)
    doc.text(`https://NEXA.sh`, lMargin, tMargin + 175)

    // QR CODE (placeholder)
    const qrWinSize = 50
    doc.setFillColor(150, 150, 255)
    doc.setDrawColor(90, 90, 255)
    doc.rect(rMargin - qrWinSize, tMargin + 110, qrWinSize, qrWinSize, 'FD')

    window.open(URL.createObjectURL(doc.output('blob', 'tx-receipt.pdf')))

    // const dataUri = doc.output('datauristring')
    // const embed = `<embed width='100%' height='100%' src='${dataUri}'/>`
    // const docWin = window.open()
    // docWin.document.open()
    // docWin.document.write(embed)
    // docWin.document.close()
}

onMounted(() => {
    console.log('Mounted!')
    // openDoc()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="max-w-5xl mx-auto px-3 py-10 flex flex-col gap-3">
        <h1 class="text-4xl text-gray-700 font-medium">
            Transaction Receipt
        </h1>

        <span class="block text-lg text-gray-500 font-medium truncate">
            {{id}}
        </span>

        <p class="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit at omnis alias minima ut quaerat tempore velit deserunt quia quisquam maxime, ipsam sequi? Vero animi explicabo obcaecati voluptatem alias.
        </p>

        <button @click="openDoc" target="_blank" class="w-fit px-3 py-1 text-xl font-medium text-blue-500 bg-blue-100 border-2 border-blue-300 rounded-lg shadow hover:bg-blue-200">
            Open PDF Receipt
        </button>

        <div class="w-1/2 p-3 text-sm">
            Please choose your preferred format:

            <div class="grid grid-cols-2">
                <button>US Letter</button>
                <button>Universal A4</button>
            </div>
        </div>
    </main>
</template>
