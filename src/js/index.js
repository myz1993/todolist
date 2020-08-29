"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('section.addItem button')
  const itemInput = document.querySelector('section.addItem input')
  const ulTag = document.querySelector('section.itemList ul')

  const createListItemWithInputValue = function (itemName) {
    //create li tag
    const liTag = document.createElement('li')
    //create span tag
    const spanTag = document.createElement('span')
    //create delete button
    const deleteButton = document.createElement('button')
    //put item name inside span tag
    spanTag.innerText = itemName
    //put delete text into button
    deleteButton.innerText = "Delete"
    //insert span and button into li
    liTag.appendChild(spanTag)
    liTag.appendChild(deleteButton)
    //return li
    return liTag
  }

  const insertListItemIntoList = function (listItem) {
    //insert li into ul
    ulTag.appendChild(listItem)
  }

  const handleAddButtonClick = function () { 
    //get item value
    const itemName = itemInput.value

    //use input value generate li
    const listItem = createListItemWithInputValue(itemName)
    //insert li into ul
    insertListItemIntoList(listItem)
  }
  addButton.addEventListener('click', handleAddButtonClick)
})