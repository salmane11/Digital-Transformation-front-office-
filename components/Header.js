import React from 'react'
import AuditLabel from '../components/AuditLabel'

export default function Header() {
  return (
    <div>
      <div className="mt-14 flex flex-row space-x-3">
        <AuditLabel number="1" label="Audit Stratégique" />
        <AuditLabel number="2" label="Audit Digital" />
        <AuditLabel number="3" label="Audit Culturel" />
      </div>
    </div>
  )
}
