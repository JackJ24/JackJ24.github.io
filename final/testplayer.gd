extends CharacterBody3D


@onready var spring_arm = $SpringArm3D
@onready var model = $Rig
@onready var anim_tree = $AnimationTree
@onready var anim_state = $AnimationTree.get("parameters/playback")
@onready var target = get_parent().get_node("TestEnemy/Target")


var attacks = [     
	"1H_Melee_Attack_Slice_Diagonal",
	"1H_Melee_Attack_Stab",
	"1H_Melee_Attack_Chop"
	]
var Dodge = [     
	"Dodge_Forward",
	"Dodge_Backward",
	"Dodge_Left",
	"Dodge_Right"

	]
	
var LastAttack = 99999999999999
var ComboCount = 0
var ComboTimeWindow = 1.8
var IsAttacking = false
signal damage(value)


var SPEED = 2
const JUMP_VELOCITY = 4.5

var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")


func _physics_process(delta):
	LockOnCamera()
	
	Attack()
	
	if not is_on_floor():
		velocity.y -= gravity * delta
	
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	if IsAttacking == false:
		
		var input_dir = Input.get_vector("Right", "Left", "Back", "Forward")
		var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()

		if direction :
			velocity.x = direction.x * SPEED
			velocity.z = direction.z * SPEED
		else:
			velocity.x = move_toward(velocity.x, 0, SPEED)
			velocity.z = move_toward(velocity.z, 0, SPEED)
			
		if Input.is_action_just_pressed("Roll"):
			roll()
		elif $Node2/RollWindow.is_stopped():
			anim_tree.set("parameters/Run, Walk, Idle/blend_position", Vector2(-velocity.x, velocity.z) / SPEED)
			SPEED = 2

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

	if check_time_since_last_attack() == false:
			ComboCount = 0

		
	#print(ComboCount)
	if Input.is_action_just_pressed("LightAttack") and $AttackCooldown.is_stopped():
		print(check_time_since_last_attack())

		if check_time_since_last_attack() == true:
			if ComboCount == 0:
				anim_state.travel(attacks.get(0))
				ComboCount += 1
				$AttackCooldown.start()
				IsAttacking = true
				if $Hitbox.is_colliding():
					print("hit")
					emit_signal("damage", 50)
					
			elif ComboCount == 1:
				anim_state.travel(attacks.get(1))
				ComboCount += 1
				$AttackCooldown.start()
				IsAttacking = true
				if $Hitbox.is_colliding():
					print("hit")
					emit_signal("damage", 50)
					
			elif ComboCount == 2:
				anim_state.travel(attacks.get(2))
				ComboCount += 1
				$AttackCooldown.start()
				IsAttacking = true
				if $Hitbox.is_colliding():
					print("hit")
					emit_signal("damage", 100)
					
			elif ComboCount == 3:
				ComboCount = 0
				$AttackCooldown.start()
				
		if check_time_since_last_attack() == false:
			ComboCount = 0
			LastAttack = 99999999999
			$AttackCooldown.start()
			IsAttacking = false
	IsAttacking = false

func LockOnCamera():
	look_at(target.global_position)
	self.rotate_object_local(Vector3(0,1,0), 3.14)

func roll():
	if $Node2/RollTimer.is_stopped():
		anim_state.travel(Dodge.get(0))
		SPEED = 5
		$Node2/RollWindow.start()
		$Node2/RollTimer.start()
	

		
		


		
