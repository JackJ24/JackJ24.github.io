extends CharacterBody3D

const MAX_HEALTH = 100
var health = MAX_HEALTH
var SPEED = 2.0
const JUMP_VELOCITY = 4.5
var roll_magnitude = 30

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")


##draw
func _physics_process(delta):
	
	set_health_bar()
	movement(delta)
	RotateChar()

	move_and_slide()
	
	
	
	
func movement(delta):
		# Add the gravity.
	if not is_on_floor():
		velocity.y -= gravity * delta

	# Handle jump.
	#if Input.is_action_just_pressed("ui_accept") and is_on_floor():
	#	velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir = Input.get_vector("Left", "Right", "Forward", "Back")
	var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)
		
func roll_char():
	if Input.is_action_pressed("Roll Button"):
		if $roll_window.is_stopped():
			$roll_window.start()
	if Input.is_action_just_released("Roll Button"):
		if $roll_window.is_stopped():
			velocity = direction * roll_magnitude
			$Node/roll_window.stop()
			

func RotateChar():
	if Input.is_key_pressed(KEY_LEFT):
		rotate_y(0.05)
	if Input.is_key_pressed(KEY_RIGHT):
		rotate_y(-0.05)
func int_health_bar():
	$HealthBar.max_value = MAX_HEALTH
	$HealthBar.value = health
	
func set_health_bar():
	$HealthBar.value = health

# 
func _on_area_3d_area_entered(area):
	health = health - 10
	pass # Replace with function body.
	
