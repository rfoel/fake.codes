import {
  formatCNPJ,
  formatCPF,
  generateCNPJ,
  generateCPF,
} from '@brazilian-utils/brazilian-utils'

export type Resource = {
  value: string
  formatted: string
  resource?: string
}

type Resources = {
  [key: string]: Resource
}

const resources: Resources = {
  get cnpj() {
    const value = generateCNPJ()
    return {
      value,
      formatted: formatCNPJ(value),
    }
  },
  get cpf() {
    const value = generateCPF()
    return {
      value,
      formatted: formatCPF(value),
    }
  },
}

export default resources
