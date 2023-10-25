import { useState, useEffect } from 'react'


import { connect } from 'react-redux'
const Rt = ({
  tokenmall,
  account,
}) => {

  useEffect(() => {
  }, [])

  const [formData, setFormData] = useState({
    input: ''
  })

  const { input } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    tokenmall.methods.mint(input).send({ from: account })
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          Dirección de la Imagen Token
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">

            <input
              type="text"
              value={input}
              onChange={e => onChange(e)}
              name="input"
              placeholder="'http...1'"
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 mx-1 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-500 bg-white hover:text-white hover:bg-indigo-500 hover:border-indigo-500"
      >
        TOKENIZAR
      </button>
    </form>
  )
}

const mapStateToProps = state => ({
  tokenmall: state.ethereum.tokenmall,
  account: state.ethereum.account,
})

export default connect(mapStateToProps, {
})(Rt)