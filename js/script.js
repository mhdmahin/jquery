// JQuery
$(document).ready(function(){
	// $('#hide').click(function(){
		// $('h2').fadeOut();
	// });
	// $('#show').click(function(){
		// $('h2').fadeIn();
	// });
	// $('#toggle').click(function(){
		// $('h2').fadeToggle();
	// });
	
	
	$( "a[hreflang|='en']" ).css( "border", "3px dotted green" );
	
	$( "input[name*='man']" ).val( "has man in it!" );
	
	$( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );
	
	$( "input[name!='newsletter']" ).next().append( "<b>; not newsletter</b>" );
	
	
});


$( "#go" ).click(function() {
  $( "#block" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});

$( "#go1" ).click(function() {
  $( "#block1" )
    .animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
});
 
$( "#go2" ).click(function() {
  $( "#block2" )
    .animate({ width: "90%" }, 1000 )
    .animate({ fontSize: "24px" }, 1000 )
    .animate({ borderLeftWidth: "15px" }, 1000 );
});
 
$( "#go3" ).click(function() {
  $( "#go1" ).add( "#go2" ).click();
});
 
$( "#go4" ).click(function() {
  $( ".mbs" ).css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
});

$( "img" ).attr({
  src: "images/mm.jpg",
  title: "jQuery",
  alt: "jQuery Logo"
});
$( ".mn" ).text( $( "img" ).attr( "alt" ) );

$( ".pp" ).bind( "myCustomEvent", function( e, myName, myValue ) {
  $( this ).text( myName + ", hi there!" );
  $( ".span" )
    .stop()
    .css( "opacity", 1 )
    .text( "myName = " + myName )
    .fadeIn( 30 )
    .fadeOut( 1000 );
  });
$( "button" ).click(function() {
  $( ".pp" ).trigger( "myCustomEvent", [ "John" ] );
});

$( "form input" ).css( "border", "2px dotted blue" );
$( "form fieldset input" ).css( "backgroundColor", "yellow" );

$( "ul.topnav > li" ).css( "border", "3px double red" );

$( "tr:odd" ).css( "background-color", "#bbbbff" );

$( ":header" ).css({ background: "#ccc", color: "blue" });

$( "select" )
	.change(function() {
		var str = "";
		$( "select option:selected" ).each(function() {
		str += $( this ).text() + " ";
	});
	$( ".select" ).text( str );
})
.trigger( "change" );

$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
animateIt();

function aClick() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "body" )
    .delegate( "#theone", "click", aClick )
    .find( "#theone" ).text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "body" )
    .undelegate( "#theone", "click", aClick )
    .find( "#theone" ).text( "Does nothing..." );
});

var n = 0;
$( ".asas" ).one( "click", function() {
  var index = $( ".asas" ).index( this );
  $( this ).css({
    borderStyle: "inset",
    cursor: "auto"
  });
  $( ".ppp" ).text( "Div at index #" + index + " clicked." +
    " That's " + (++n) + " total clicks." );
});

var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
 
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
 
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
 
  // this === "person"
  .on( "click", youClick )
 
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
 
  // this === "<button> element"
  .on( "click", you.test );

$( "body" ).delegate( ".sasa", "click", function() {
  $( this ).after( "<p>Another paragraph!</p>" );
});

$( ".clic" ).bind( "click", function( event ) {
  var str = "( " + event.pageX + ", " + event.pageY + " )";
  $( ".sp" ).text( "Click happened! " + str );
});
$( ".clic" ).bind( "dblclick", function() {
  $( ".sp" ).text( "Double-click happened in " + this.nodeName );
});
$( ".clic" ).bind( "mouseenter mouseleave", function( event ) {
  $( this ).toggleClass( "over" );
});

function handler( event ) {
  var target = $( event.target );
  if ( target.is( "li" ) ) {
    target.children().toggle();
  }
}
$( "ul" ).click( handler ).find( "ul" ).hide();

$( ".para" ).click(function( event ) {
  event.stopImmediatePropagation();
});
$( ".para" ).click(function( event ) {
  // This function won't be executed
  $( this ).css( "background-color", "#f00" );
});
$( ".claa" ).click(function( event ) {
  // This function will be executed
  $( this ).css( "background-color", "#f00" );
});

$( "p" ).on( "test.something", function( event ) {
  alert( event.namespace );
});
$( ".bton" ).click(function( event ) {
  $( ".ppd" ).trigger( "test.something" );
});

$( ".mbv" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
})
.mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
});

$( ".cdv" ).mousemove(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $( ".sppn" ).first().text( "( event.pageX, event.pageY ) : " + pageCoords );
  $( ".sppn" ).last().text( "( event.clientX, event.clientY ) : " + clientCoords );
});

$( ".smc" ).click(function() {
  $( this ).slideUp();
});













