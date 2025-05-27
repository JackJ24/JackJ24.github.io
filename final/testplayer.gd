extends CharacterBody3D


@onready var spring_arm = $SpringArm3D
@onready var model = $Rig
@onready var anim_tree = $AnimationTree
@onready var anim_state = $AnimationTree.get("parameters/playback")

var attacks = [     
	"1H_Melee_Attack_Slice_Diagonal",
	"1H_Melee_Attack_Stab",
	"1H_Melee_Attack_Chop"
	]
var LastAttack = 99999999999999
var ComboCount = 0
var ComboTimeWindow = 1.8
var CanAttack = true


const SPEED = 5.0
const JUMP_VELOCITY = 4.5


func _physics_process(delta):
	
	Attack()
	
	
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir = Input.get_vector("Right", "Left", "Back", "Forward")
	var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	anim_tree.set("parameters/Run, Walk, Idle/blend_position", Vector2(-velocity.x, velocity.z) / SPEED)
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)

	move_and_slide()
	
	pass
	

func check_time_since_last_attack():
	var thisAttack = Time.get_unix_time_from_system()
	print(thisAttack - LastAttack)
	if thisAttack - LastAttack < ComboTimeWindow:
		LastAttack = Time.get_unix_time_from_system()
		return true
	return false
	
func Attack():
	#print(ComboCount)
	if Input.is_action_just_pressed("LightAttack") and $AttackCooldown.is_stopped():
		print(check_time_since_last_attack())

		if check_time_since_last_attack() == true:
			if ComboCount == 0:
				anim_state.travel(attacks.get(0))
				ComboCount += 1
				$AttackCooldown.start()
			elif ComboCount == 1:
				anim_state.travel(attacks.get(1))
				ComboCount += 1
				$AttackCooldown.start()
			elif ComboCount == 2:
				anim_state.travel(attacks.get(2))
				ComboCount += 1
				$AttackCooldown.start()
			elif ComboCount == 3:
				ComboCount = 0
				$AttackCooldown.start()
		if check_time_since_last_attack() == false:
			ComboCount = 0
			LastAttack = 99999999999
			$AttackCooldown.start()
			



		
