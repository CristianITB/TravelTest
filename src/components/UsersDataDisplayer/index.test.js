import React from 'react'
import { render, screen, fireEvent, waitFor, findByTestId } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import axiosMock from 'axios'
import data from '../../resources/dataSamples/employees'
import DynamicAllEmployeesDisplayer from './index.jsx'

jest.mock('axios')
