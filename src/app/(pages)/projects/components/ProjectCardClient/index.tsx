'use client'

import { startTransition, useState } from 'react'
import dynamic from 'next/dynamic'

import { X } from '@phosphor-icons/react'

import ModalContent from '../ModalContent'
import type { IProject } from '../../page'
const Modal = dynamic(() => import('../Modal'))

interface IProjectCardClient {
  children: React.ReactNode
  project: IProject
}

export default function ProjectCardClient({ children, project }: IProjectCardClient) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    startTransition(() => setIsOpen(true))

    //? Create loading component and see if it works with the useTransition hook
    // startTransition(() => {
    //   setTimeout(() => setIsOpen(true), 5000)
    // })
  }

  const handleCloseModal = () => {
    startTransition(() => setIsOpen(false))
  }

  return (
    <>
      <div aria-hidden="true" onClick={handleOpenModal}>
        {children}
      </div>

      {isOpen && (
        <Modal>
          <button
            onClick={handleCloseModal}
            className={`
              absolute right-5 top-5
            `}
          >
            <X
              color="#f7f5f9"
              className={`
                h-6 w-6
                md:h-7 md:w-7
              `}
            />
          </button>

          <ModalContent project={project} />
        </Modal>
      )}
    </>
  )
}