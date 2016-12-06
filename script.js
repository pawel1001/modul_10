$(function() {

function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    var i = 0;
    for (i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function Column(name) {
    var self = this; 

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
		  Column.prototype = {
			addCard: function(card) {
			  this.$element.children('ul').append(card.$element);
			},
			removeColumn: function() {
			  this.$element.remove();
			}
		};
    }
  }
  
  
  
function createColumn() {
var $column = $('<div>').addClass('column');
var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
var $columnCardList = $('<ul>').addClass('column-card-list');
var $columnDelete = $('<button>').addClass('btn-delete').text('x');
var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');
}



function createColumn() {
// TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
  var $column = $('<div>').addClass('column');
  var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
  var $columnCardList = $('<ul>').addClass('column-list');
  var $columnDelete = $('<button>').addClass('btn-delete').text('x');
  var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

// PODPINANIE ODPOWIEDNICH ZDARZEŃ
  $columnDelete.click(function() {
    self.removeColumn();
  });
  $columnAddCard.click(function(event) {
    self.addCard(new Card(prompt("Wpisz nazwę karty")));
  });

// KONSTRUOWANIE ELEMENTU KOLUMNY
  $column.append($columnTitle)
    .append($columnDelete)
    .append($columnAddCard)
    .append($columnCardList);

// ZWRACANIE STWORZONEJ  KOLUMNY
  return $column;
}

this.$element.children('ul').append(card.$element);
this.$element.remove();

function createCard() {
	// TWORZENIE KLOCKÓW
	var $card = $('<li>').addClass('card');
var $cardDescription = $('<p>').addClass('card-description').text(self.description);
var $cardDelete = $('<button>').addClass('btn-delete').text('x');

// PRZYPIĘCIE ZDARZENIA
$cardDelete.click(function(){
       		self.removeCard();
});

// SKŁADANIE I ZWRACANIE KARTY
$card.append($cardDelete)
		.append($cardDescription);

	return $card;
}

Card.prototype = {
	removeCard: function() {
		this.$element.remove();
}
}


var board = {
    name: 'Tablica Kanban',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
};


function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
  
 $('.column-card-list').sortable();

$('.create-column')
  .click(function(){
	var name = prompt('Wpisz nazwę kolumny');
	var column = new Column(name);
    	board.addColumn(column);
  });
  
  
  
  
  // TWORZENIE KOLUMN
var todoColumn = new Column('Do zrobienia');
var doingColumn = new Column('W trakcie');
var doneColumn = new Column('Skończone');

// DODAWANIE KOLUMN DO TABLICY
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new Card('Nowe zadanie');
var card2 = new Card('Stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
todoColumn.addCard(card1);
doingColumn.addCard(card2);
 
 
})