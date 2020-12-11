import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            All rights reserved. Unless otherwise indicated,
            all materials on these pages are copyrighted.
            No part of these pages, either text or images may
            be used for any purpose other than personal use,
            unless explicit authorisation is given by Alexandar Gligorijevich.
            
            Therefore reproduction, modification, storage
            in a retrieval system or retransmission, in any form
            or by any means – electronic, mechanical
            or otherwise, for reasons other than personal use,
            is strictly prohibited without prior written permission.
            © Copyright Alexandar Gligorijevich 2020
          </div>
        </div>
      </Container>
    </footer>
  )
}
