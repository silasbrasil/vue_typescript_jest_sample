import {
  byId,
  byNumber,
  ascentByNumber } from '@/core/functions.ts';

import {
  Course,
  CourseV2,
  Card } from '@/core/entities.ts'


describe('Test functions', () => {

  const courses: Array<Course> = [
    { id: 1, name: 'Atendimento Básico' },
    { id: 2, name: 'Gestão do Tempo' },
    { id: 3, name: 'Matemática Básica' },
    { id: 4, name: '5 Porquês' }
  ]

  const cards: Array<Card> = [
    { number: 3, type: 201 },
    { number: 4, type: 203 },
    { number: 1, type: 101 },
    { number: 2, type: 103 },
  ]

  const coursesV2: Array<CourseV2> = [
    { id: 5, name: 'Atendimento Básico', description: 'Description', age: 12 },
    { id: 7, name: 'Atendimento Básico', description: 'Description', age: 12 },
    { id: 1, name: 'Atendimento Básico', description: 'Description', age: 12 },
    { id: 3, name: 'Atendimento Básico', description: 'Description', age: 12 },
    { id: 2, name: 'Atendimento Básico', description: 'Description', age: 12 },
  ]

  it('should be Equal course', () => {
    // act
    const res = courses.find(byId(4))

    // asserts
    expect(res).toEqual({ id: 4, name: '5 Porquês' })
  })

  it('should be Equal card', () => {
    // act
    const res = cards.find(byNumber(1))

    // asserts
    expect(res).toEqual({ number: 1, type: 101 })
  })

  it('should be number 4', () => {
    // act
    const res = cards.find(byNumber(4))

    // asserts
    expect(res?.number).toBe(4)
  })

  it('should return ordered Array<Cards>', () => {
    // arranges
    const mockAscendByNumber = jest.fn(ascentByNumber)

    // acts
    const ordered = cards.sort(mockAscendByNumber)

    // asserts
    expect(mockAscendByNumber).toHaveBeenCalled()
    expect(ordered[2].number).toBe(3)
    expect(ordered[2].type).toBe(201)
  })
})
