extends Control
#Buttons used to change scene to other scene

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_start_button_pressed() -> void:
	get_tree().change_scene_to_file("res://battle_grounds.tscn")
	pass # Replace with function body.


func _on_controls_button_pressed() -> void:
	get_tree().change_scene_to_file("res://controls.tscn")
	pass # Replace with function body.


func _on_quit_button_pressed() -> void:
	get_tree().quit()
	pass # Replace with function body.
