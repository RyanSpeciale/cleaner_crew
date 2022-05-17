import React from 'react'

interface Props {
    name: string;
    onChange: (event: React.SyntheticEvent) => void;
    onSubmit: (data: object) => Promise<string>;
}

export default function quote({}: Props) {
  return (
    <div>quote</div>
  )
}

