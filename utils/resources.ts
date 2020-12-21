import {
  formatCNPJ,
  formatCPF,
  generateCNPJ,
  generateCPF,
  getCities,
  getStates,
} from '@brazilian-utils/brazilian-utils'

export type Resource = {
  data: {
    value: string
    formatted?: string
  }[]
  resource?: string
}

type Resources = {
  [key: string]: { (query?: string): Promise<Resource['data']> }
}

const resources: Resources = {
  cep(query) {
    return new Promise(resolve => {
      const cities = getCities()
      const randomQuery = cities[Math.floor(Math.random() * cities.length)]
      return fetch(`/api/cep/?query=${query || randomQuery}`)
        .then(response => response.json())
        .then(response =>
          resolve([
            { value: response.cep },
            { value: response.logradouro },
            { value: response.bairro },
            { value: response.cidade },
            { value: response.uf },
          ]),
        )
    })
  },
  cnpj() {
    const value = generateCNPJ()
    return Promise.resolve([
      {
        value,
        formatted: formatCNPJ(value),
      },
    ])
  },
  cpf() {
    const value = generateCPF()
    return Promise.resolve([
      {
        value,
        formatted: formatCPF(value),
      },
    ])
  },
}

export default resources
