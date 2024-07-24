'use client'

import { useState } from 'react'

type Data = {
  monthlyMortgagePayment: null | number
  totalPaymentAmount: null | number
  totalInterestPaid: null | number
}

const Page = () => {
  const [data, setData] = useState<Data>({
    monthlyMortgagePayment: null,
    totalPaymentAmount: null,
    totalInterestPaid: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const loanAmount = Number(formData.get('loanAmount'))
    const annualInterestRate = Number(formData.get('annualInterestRate')) / 100
    const loanTerm = Number(formData.get('loanTerm'))
    const totalNumberOfPayments = loanTerm * 12
    const monthlyInterestRate = annualInterestRate / 12
    const monthlyMortgagePayment =
      (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1)
    const totalPaymentAmount = monthlyMortgagePayment * totalNumberOfPayments
    const totalInterestPaid = totalPaymentAmount - loanAmount

    setData({
      monthlyMortgagePayment,
      totalPaymentAmount,
      totalInterestPaid,
    })
  }

  return (
    <div className="h-full w-full border-1 border-black p-2 dark:border-gray-400">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="Loan amount">Loan amount ($): </label>
              </td>
              <td>
                <input
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  name="loanAmount"
                  type="number"
                />
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <label htmlFor="Annual interest rate">Annual interest rate (%): </label>
              </td>
              <td>
                <input
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  name="annualInterestRate"
                  type="number"
                  step={0.001}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Loan term">Loan term (in years): </label>
              </td>
              <td>
                <input
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  name="loanTerm"
                  type="number"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 "
        >
          calculate
        </button>
      </form>
      <div className="mt-8">
        <div>
          Monthly Payment Amount:{' '}
          {data.monthlyMortgagePayment ? data.monthlyMortgagePayment.toFixed(2) : null}
        </div>
        <div>
          Total Payment Amount:{' '}
          {data.totalPaymentAmount ? data.totalPaymentAmount.toFixed(2) : null}
        </div>
        <div>
          Total Interest Paid: {data.totalInterestPaid ? data.totalInterestPaid.toFixed(2) : null}
        </div>
      </div>
    </div>
  )
}

export default Page
